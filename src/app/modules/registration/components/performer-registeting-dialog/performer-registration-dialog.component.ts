import {Component, HostBinding, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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

    private initializeForm() {

        const emailCtrl = new FormControl(null, [Validators.required, Validators.email]);

        // TODO: repeat password validator

        const passwordCtrl = new FormControl(null, [Validators.required]);

        const repeatPasswordCtrl = new FormControl(null, [Validators.required]);

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
