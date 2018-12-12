import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef, MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

// rxjs
import {Subject} from 'rxjs';
import {delay, takeUntil} from 'rxjs/operators';

// services
import {AuthorizationService} from '../../services/authorization.service';

@Component({
    selector: 'app-authorization-dialog',
    templateUrl: './authorization-dialog.component.html',
    styleUrls: ['./authorization-dialog.component.scss']
})
export class AuthorizationDialogComponent implements OnInit, OnDestroy {

    formGroup: FormGroup;

    isProgressVisible$ = new Subject<boolean>();

    private destroy$ = new Subject();

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

        this.showProgress();

        const login: string = this.formGroup.get('emailCtrl').value;

        const password: string = this.formGroup.get('passwordCtrl').value;

        this.authorizationService.authorizeByForm(login, password).pipe(
            delay(10000),
            takeUntil(this.destroy$)
        ).subscribe(
            () => {

               this.dialogRef.close();
            },
            () => {

                this.hideProgress();

                const passwordCtrl: FormControl = this.formGroup.get('passwordCtrl') as FormControl;

                passwordCtrl.setValue('', { emitEvent: false });

                passwordCtrl.setErrors({ authentication: true });
            }
        );
    }

    private hideProgress(): void {

        this.isProgressVisible$.next(false);
    }

    private showProgress(): void {

        this.isProgressVisible$.next(true);
    }

// lifecycle hooks -------------------------------------------------------------------------------------------------------------------------

    ngOnInit() {
        this.initializeForm();
    }

    ngOnDestroy(): void {

        this.isProgressVisible$.unsubscribe();

        this.destroy$.next();

        this.destroy$.unsubscribe();
    }

}
