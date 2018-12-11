import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';

import {
    PerformerRegistrationDialogComponent
} from '../../../registration/components/performer-registration-dialog/performer-registration-dialog.component';
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

    openPerformerRegistrationDialog(): void {

        this.dialogService.open(PerformerRegistrationDialogComponent);
    }

    openAuthorizationDialog(): void {
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
