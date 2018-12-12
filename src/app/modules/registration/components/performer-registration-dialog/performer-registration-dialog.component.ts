import {Component, HostBinding, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material';

// rxjs
import {pipe, Subject} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';
// models
import {Performer} from '../../../../domain/models/user.model';
// services
import {RegistrationService} from '../../services/registration.service';

@Component({
    selector: 'app-performer-registration-dialog',
    templateUrl: './performer-registration-dialog.component.html',
    styleUrls: ['./performer-registration-dialog.component.scss']
})
export class PerformerRegistrationDialogComponent implements OnInit, OnDestroy {

    formGroup: FormGroup;

    isProgressVisible$ = new Subject<boolean>();

    private destroy$ = new Subject();

    @HostBinding('class.app-dialog') private isDefaultClassUsed = true;

    @ViewChild('successMessageTemplate') private successMessageTemplate: TemplateRef<any>;

    constructor(private matDialogRef: MatDialogRef<PerformerRegistrationDialogComponent>, private matDialog: MatDialog,
                private registrationService: RegistrationService) {
    }

    onCloseButtonClick(): void {

        this.matDialog.closeAll();
    }

    onFormSubmit(): void {

        const user = new Performer();

        user.email = this.formGroup.get('emailCtrl').value;

        user.password = this.formGroup.get('passwordCtrl').value;

        this.showProgress();

        this.registrationService.registerViaEmail(user).pipe(
            pipe(
                takeUntil(this.destroy$)
            )
        ).subscribe(
            () => {

                this.matDialog.open(this.successMessageTemplate);
            },
            () => {

                this.hideProgress();
            }
        );
    }

    private hideProgress(): void {

        this.isProgressVisible$.next(false);
    }

    private initializeForm() {

        const emailCtrl = new FormControl(null, [Validators.required, Validators.email]);

        const passwordCtrl = new FormControl(null, [Validators.required, Validators.minLength(6)]);

        const passwordMatchedValidatorFn: ValidatorFn = function (control: AbstractControl): ValidationErrors | null {

            const value: any = control.value;

            return (!passwordCtrl.valid || value !== passwordCtrl.value) ? {passwordNotMatched: true} : null;
        };

        const repeatPasswordCtrl = new FormControl(null, [Validators.required, passwordMatchedValidatorFn]);

        passwordCtrl.valueChanges.pipe(
            tap(() => {
                repeatPasswordCtrl.updateValueAndValidity();
            })
        ).subscribe();

        this.formGroup = new FormGroup({
            emailCtrl,
            passwordCtrl,
            repeatPasswordCtrl
        });
    }

    private showProgress(): void {

        this.isProgressVisible$.next(true);
    }

// lifecycle hooks -------------------------------------------------------------------------------------------------------------------------

    ngOnInit() {

        this.initializeForm();
    }

    ngOnDestroy(): void {

        this.destroy$.next();

        this.destroy$.unsubscribe();
    }
}




