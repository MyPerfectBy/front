import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialogRef, MatFormFieldModule, MatInputModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {PerformerRegistrationDialogComponent} from './performer-registration-dialog.component';

describe('PerformerRegistrationDialogComponent', () => {

    let component: PerformerRegistrationDialogComponent;

    let fixture: ComponentFixture<PerformerRegistrationDialogComponent>;

    beforeEach(async(() => {
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
            ],
            providers: [
                { provide: MatDialogRef, useValue: {} }
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
});
