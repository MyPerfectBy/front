import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AuthorizationDialogComponent} from './authorization-dialog.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {
    MatDialogRef,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

describe('AuthorizationDialogComponent', () => {

    let component: AuthorizationDialogComponent;

    let fixture: ComponentFixture<AuthorizationDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AuthorizationDialogComponent],
            imports: [
                NoopAnimationsModule,
                ReactiveFormsModule,
                HttpClientModule,

                // material
                MatFormFieldModule,
                MatInputModule,
                MatIconModule,
                MatDividerModule,
                MatProgressSpinnerModule
            ],
            providers: [
                {provide: MatDialogRef, useValue: {}}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(AuthorizationDialogComponent);

        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should create', () => {

        expect(component).toBeTruthy();
    });
});
