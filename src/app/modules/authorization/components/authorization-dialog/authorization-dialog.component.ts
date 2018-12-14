import {Component, HostBinding, Inject, OnDestroy, OnInit} from '@angular/core';
import { FormGroup} from '@angular/forms';
import {MatDialogRef} from '@angular/material';


// rxjs
import {Subject} from 'rxjs';


// services
import {AuthorizationService} from '../../services/authorization.service';
import {DOCUMENT} from '@angular/common';

@Component({
    selector: 'app-authorization-dialog',
    templateUrl: './authorization-dialog.component.html',
    styleUrls: ['./authorization-dialog.component.scss']
})
export class AuthorizationDialogComponent implements OnInit, OnDestroy {

    isProgressVisible$ = new Subject<boolean>();

    private destroy$ = new Subject();

    vkAuthorizeUrl =
        'https://oauth.vk.com/authorize?client_id=6779491&display=popup&redirect_uri=http://dev.makeperfect.by&scope=email&response_type=code';
    googleAuthorizeUrl =
        'https://www.google.com/';
    odnoklassnikiAuthorizeUrl =
        'https://odnoklassniki.ru/';

    @HostBinding('class.app-dialog') private isDefaultClassUsed = true;

    constructor(private dialogRef: MatDialogRef<AuthorizationDialogComponent>,
                private authorizationService: AuthorizationService, @Inject(DOCUMENT) private document: any) {

    }

    networksAuthorization(href) {
        console.log(href);
        this.document.location.href = href;
    }

    private hideProgress(): void {

        this.isProgressVisible$.next(false);
    }

    private showProgress(): void {

        this.isProgressVisible$.next(true);
    }

// lifecycle hooks -------------------------------------------------------------------------------------------------------------------------

    ngOnInit() {

    }

    ngOnDestroy(): void {

        this.isProgressVisible$.unsubscribe();

        this.destroy$.next();

        this.destroy$.unsubscribe();
    }

}
