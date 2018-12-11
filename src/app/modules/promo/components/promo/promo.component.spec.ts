import {Directive, Input} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatDialog} from '@angular/material';

// jasmine
import createSpyObj = jasmine.createSpyObj;
import Spy = jasmine.Spy;

// components
import {PromoComponent} from './promo.component';
import {
    PerformerRegistrationDialogComponent
} from '../../../registration/components/performer-registeting-dialog/performer-registration-dialog.component';


describe('PromoComponent', () => {

    let component: PromoComponent;

    let fixture: ComponentFixture<PromoComponent>;

    let matDialogSpy: MatDialog;

    beforeEach(async(() => {

        matDialogSpy = createSpyObj('MatDialog', ['open']);

        TestBed.configureTestingModule({
            declarations: [
                PromoComponent,
                // stubs
                FullpageStubDirective
            ],
            providers: [
                { provide: MatDialog, useValue: matDialogSpy }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(PromoComponent);

        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should create', () => {

        expect(component).toBeTruthy();
    });

    it('should open registration dialog', () => {

        const openSpy: Spy = matDialogSpy.open as Spy;


        component.openPerformerRegistrationDialog();

        expect(openSpy.calls.any()).toBeTruthy();

        expect(openSpy.calls.first().args[0]).toBe(PerformerRegistrationDialogComponent);
    });
});

@Directive({
    selector: '[app-fullpage], [fullpage]'
})
class FullpageStubDirective {

    @Input() options;
}
