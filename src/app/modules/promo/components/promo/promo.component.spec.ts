import {Directive, Input} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatDialog} from '@angular/material';

import {PromoComponent} from './promo.component';

describe('PromoComponent', () => {
    let component: PromoComponent;
    let fixture: ComponentFixture<PromoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                PromoComponent,
                // stubs
                FullpageStubDirective
            ],
            providers: [
                { provide: MatDialog, useValue: {} }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(PromoComponent);

        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should create', () => {

        expect(component).toBeTruthy();
    });
});

@Directive({
    selector: '[app-fullpage], [fullpage]'
})
class FullpageStubDirective {

    @Input() options;
}
