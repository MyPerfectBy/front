import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialog, MatDialogRef, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

// jasmine
import createSpyObj = jasmine.createSpyObj;
import Spy = jasmine.Spy;

// rxjs
import {EMPTY, of, throwError} from 'rxjs';
import {skip, take} from 'rxjs/operators';

// model
import {Performer} from '../../../../domain/models/user.model';
// components
import {PerformerRegistrationDialogComponent} from './performer-registration-dialog.component';
import {RegistrationService} from '../../services/registration.service';

describe('PerformerRegistrationDialogComponent', () => {

    let component: PerformerRegistrationDialogComponent;

    let fixture: ComponentFixture<PerformerRegistrationDialogComponent>;

    // spies

    let matDialogSpy: MatDialog;

    let matDialogRefSpy: MatDialogRef<PerformerRegistrationDialogComponent>;

    let registrationServiceSpy: RegistrationService;

    beforeEach(async(() => {

        matDialogSpy = createSpyObj('MatDialog', ['open']);

        matDialogRefSpy = createSpyObj('MatDialogRef', ['close']);

        registrationServiceSpy = createSpyObj('RegistrationService', ['registerViaEmail']);

        TestBed.configureTestingModule({
            declarations: [
                PerformerRegistrationDialogComponent
            ],
            imports: [
                NoopAnimationsModule,
                ReactiveFormsModule,

                // material
                MatFormFieldModule,
                MatInputModule,
                MatProgressSpinnerModule
            ],
            providers: [
                {provide: MatDialog, useValue: matDialogSpy},
                {provide: MatDialogRef, useValue: matDialogRefSpy},
                {provide: RegistrationService, useValue: registrationServiceSpy}
            ]
        }).compileComponents();
    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(PerformerRegistrationDialogComponent);

        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should create', () => {

        expect(component).toBeTruthy();
    });

    it('should show progress during registration via email', (done: DoneFn) => {

        const registerUserSpy: Spy = registrationServiceSpy.registerViaEmail as Spy;

        registerUserSpy.and.returnValue(EMPTY);


        component.isProgressVisible$.pipe(
            take(1)
        ).subscribe(
            (isProgressVisible: boolean) => {

                expect(isProgressVisible).toBeTruthy();

                done();
            }
        );

        component.onFormSubmit();
    });

    it('should hide progress if registration is rejected', (done: DoneFn) => {

        const registerUserSpy: Spy = registrationServiceSpy.registerViaEmail as Spy;

        registerUserSpy.and.returnValue(throwError(new Error()));

        component.isProgressVisible$.pipe(
            skip(1),
            take(1)
        ).subscribe(
            (isProgressVisible: boolean) => {

                expect(isProgressVisible).toBeFalsy();

                done();
            }
        );

        component.onFormSubmit();
    });

    it('should register user on form submit', () => {

        const registerViaEmail: Spy = registrationServiceSpy.registerViaEmail as Spy;

        registerViaEmail.and.returnValue(of(new Performer()));


        const [emailStub, passwordStub] = ['email', 'password'];

        component.formGroup.get('emailCtrl').setValue(emailStub);

        component.formGroup.get('passwordCtrl').setValue(passwordStub);

        const expectedPerformer = new Performer();

        expectedPerformer.email = emailStub;

        expectedPerformer.password = passwordStub;


        component.onFormSubmit();

        expect(registerViaEmail.calls.any()).toBeTruthy('#createUser() is not called');

        expect(registerViaEmail.calls.first().args[0]).toEqual(expectedPerformer);
    });
});
