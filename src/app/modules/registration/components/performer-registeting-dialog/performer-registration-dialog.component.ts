import {Component, HostBinding, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
// rxjs
import {Subject} from 'rxjs';
import {tap} from 'rxjs/operators';
// models
import {Performer} from '../../../../domain/models/user.model';
// services
import {UserService} from '../../../../domain/services/user.service';

@Component({
    selector: 'app-performer-registration-dialog',
    templateUrl: './performer-registration-dialog.component.html',
    styleUrls: ['./performer-registration-dialog.component.scss']
})
export class PerformerRegistrationDialogComponent implements OnInit {

    formGroup: FormGroup;

    isProgressVisible$ = new Subject<boolean>();

    @HostBinding('class.app-dialog') private isDefaultClassUsed = true;

    constructor(private userService: UserService) {
    }

    onFormSubmit() {

        const performer = new Performer();

        performer.email = this.formGroup.get('emailCtrl').value;

        performer.password = this.formGroup.get('passwordCtrl').value;

        this.showProgress();

        this.userService.createUser(performer)
            .then(() => {
            })
            .catch(() => {

                this.hideProgress();
            })
        ;
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

    ngOnInit() {

        this.initializeForm();
    }
}




