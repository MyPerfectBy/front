import {Component, HostBinding, OnInit} from '@angular/core';
import {MatDialogRef, MatIconRegistry} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import {AuthorizationService} from '../../services/authorization.service';

@Component({
    selector: 'app-authorization-dialog',
    templateUrl: './authorization-dialog.component.html',
    styleUrls: ['./authorization-dialog.component.scss']
})
export class AuthorizationDialogComponent implements OnInit {

    formGroup: FormGroup;

    @HostBinding('class.app-dialog') private isDefaultClassUsed = true;

    constructor(private dialogRef: MatDialogRef<AuthorizationDialogComponent>, iconRegistry: MatIconRegistry,
                sanitizer: DomSanitizer, private authorizationService: AuthorizationService) {
        iconRegistry.addSvgIcon(
            'vk',
            sanitizer.bypassSecurityTrustResourceUrl('assets/images/vk.svg')
        );
        iconRegistry.addSvgIcon(
            'google-plus',
            sanitizer.bypassSecurityTrustResourceUrl('assets/images/google-plus.svg')
        );
        iconRegistry.addSvgIcon(
            'odnoklassniki',
            sanitizer.bypassSecurityTrustResourceUrl('assets/images/odnoklassniki.svg')
        );
    }

    private initializeForm() {
        const emailCtrl = new FormControl(null, [Validators.required]);

        const passwordCtrl = new FormControl(null, [Validators.required]);

        this.formGroup = new FormGroup({
            emailCtrl,
            passwordCtrl,
        });
    }

    onFormSubmit() {

        const login: string = this.formGroup.get('emailCtrl').value;

        const password: string = this.formGroup.get('passwordCtrl').value;

        this.authorizationService.authorizeByForm(login, password).pipe().subscribe(console.log);
    }

    ngOnInit() {
        this.initializeForm();
    }

}
