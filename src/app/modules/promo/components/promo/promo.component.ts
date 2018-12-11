import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';

import {
    PerformerRegistrationDialogComponent, PerformerRegistrationData
} from '../../../registration/components/performer-registeting-dialog/performer-registration-dialog.component';
import {
    AuthorizationDialogComponent
} from '../../../authorization/authorization/components/authorization-dialog/authorization-dialog.component';

@Component({
    selector: 'app-promo',
    templateUrl: './promo.component.html',
    styleUrls: ['./promo.component.scss']
})
export class PromoComponent implements OnInit {

    config: any;
    fullpage_api: any;

    constructor(private dialogService: MatDialog) {

        this.config = {

            menu: '#menu',
            navigation: true,

        };
    }

    openPerformerRegistrationDialog() {

        const dialogRef = this.dialogService.open(PerformerRegistrationDialogComponent, {
            autoFocus: false
        });

        dialogRef.afterClosed().subscribe((registrationData: PerformerRegistrationData) => {

            if (!registrationData) {
                return;
            }

            console.log('send info for creating performer', registrationData);
        });

    }

    openAuthorizationDialog() {
        const config = {};

        const dialogRef = this.dialogService.open(AuthorizationDialogComponent, config);

        dialogRef.afterClosed().subscribe((data) => {
        });
    }

    getRef(fullPageRef) {
        this.fullpage_api = fullPageRef;
    }


    ngOnInit() {
    }

}
