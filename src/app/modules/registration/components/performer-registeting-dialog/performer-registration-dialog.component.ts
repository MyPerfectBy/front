import {Component, HostBinding, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-performer-registration-dialog',
  templateUrl: './performer-registration-dialog.component.html',
  styleUrls: ['./performer-registration-dialog.component.scss']
})
export class PerformerRegistrationDialogComponent implements OnInit {

    formGroup: FormGroup;

    @HostBinding('class.app-dialog') private isDefaultClassUsed = true;

    constructor(private dialogRef: MatDialogRef<PerformerRegistrationDialogComponent>) {

    }

    close() {

        this.dialogRef.close();
    }

    onFormSubmit() {

        const registrationDate: PerformerRegistrationData = {

            email: this.formGroup.get('emailCtrl').value,

            password: this.formGroup.get('passwordCtrl').value
        };


        this.dialogRef.close(registrationDate);
    }

    private initializeForm() {

        const emailCtrl = new FormControl(null, [Validators.required, Validators.email]);

        const passwordCtrl = new FormControl(null, [Validators.required, Validators.minLength(6)]);

        const passwordMatchedValidatorFn: ValidatorFn = function (control: AbstractControl): ValidationErrors | null {

            const value: any = control.value;

            return (!passwordCtrl.valid || value !== passwordCtrl.value) ? { passwordNotMatched: true } : null;
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

    ngOnInit() {

        this.initializeForm();
    }
}

export class PerformerRegistrationData {

    email: string;

    password: string;
}




