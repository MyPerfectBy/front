import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';

import {
    PerformerRegistrationDialogComponent
} from '../../../registration/components/performer-registeting-dialog/performer-registration-dialog.component';

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
        const config = {};

        const dialogRef = this.dialogService.open(PerformerRegistrationDialogComponent, config);

        dialogRef.afterClosed().subscribe(() => {

            console.log('registered');
        });

    }

    getRef(fullPageRef) {
        this.fullpage_api = fullPageRef;
    }


    ngOnInit() {
    }

}
