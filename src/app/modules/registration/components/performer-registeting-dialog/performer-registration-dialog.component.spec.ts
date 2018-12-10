import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformerRegistrationDialogComponent } from './performer-registration-dialog.component';

describe('PerformerRegistetingDialogComponent', () => {
  let component: PerformerRegistrationDialogComponent;
  let fixture: ComponentFixture<PerformerRegistrationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformerRegistrationDialogComponent ]
    })
    .compileComponents();
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
