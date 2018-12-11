import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule, MatInputModule, MatProgressSpinnerModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

// jasmine
import createSpyObj = jasmine.createSpyObj;
import Spy = jasmine.Spy;

// model
import {Performer} from '../../../../domain/models/user.model';
// services
import {UserService} from '../../../../domain/services/user.service';
// components
import {PerformerRegistrationDialogComponent} from './performer-registration-dialog.component';
import {Router} from '@angular/router';

describe('PerformerRegistrationDialogComponent', () => {

    let component: PerformerRegistrationDialogComponent;

    let fixture: ComponentFixture<PerformerRegistrationDialogComponent>;

    // spies

    let routerSpy: Router;

    let userServiceSpy: UserService;

    beforeEach(async(() => {

        routerSpy = createSpyObj('Router', ['navigate']);

        userServiceSpy = createSpyObj('UserService', ['createUser']);

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
                {provide: Router, useValue: routerSpy},
                {provide: UserService, useValue: userServiceSpy}
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

    it('should create user on form submit', () => {

        const createUserSpy: Spy = userServiceSpy.createUser as Spy;

        createUserSpy.and.returnValue(new Promise(null));


        const [emailStub, passwordStub] = ['email', 'password'];

        component.formGroup.get('emailCtrl').setValue(emailStub);

        component.formGroup.get('passwordCtrl').setValue(passwordStub);

        const expectedPerformer = new Performer();

        expectedPerformer.email = emailStub;

        expectedPerformer.password = passwordStub;


        component.onFormSubmit();

        expect(createUserSpy.calls.any()).toBeTruthy('#createUser() is not called');

        expect(createUserSpy.calls.first().args[0]).toEqual(expectedPerformer);
    });
});
