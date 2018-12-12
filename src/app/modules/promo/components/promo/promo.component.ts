import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material';
import {Subscription} from 'rxjs';

// components
import {
    AuthorizationDialogComponent
} from '../../../authorization/components/authorization-dialog/authorization-dialog.component';
import {
    PerformerRegistrationDialogComponent
} from '../../../registration/components/performer-registration-dialog/performer-registration-dialog.component';


// services
import {
    AuthorizationService
} from '../../../authorization/services/authorization.service';
import {delay} from 'rxjs/operators';




@Component({
    selector: 'app-promo',
    templateUrl: './promo.component.html',
    styleUrls: ['./promo.component.scss']
})
export class PromoComponent implements OnInit {

    config: any;
    fullpage_api: any;

    private querySubscription: Subscription;

    constructor(private dialogService: MatDialog, private route: ActivatedRoute, private authorizationService: AuthorizationService) {

        this.config = {

            menu: '#menu',
            navigation: true,

        };

        this.querySubscription = route.queryParams.subscribe(
            (queryParam: any) => {
                const code = queryParam['code'];

                if (code) {

                    this.authorizationService.authorizeByVk(code).pipe(
                        delay(10000)
                    ).subscribe((result) => console.log(result) );
                }
            }
        );
    }

    openPerformerRegistrationDialog(): void {

        this.dialogService.open(PerformerRegistrationDialogComponent);
    }

    openAuthorizationDialog(): void {
        const config = {};

        const dialogRef = this.dialogService.open(AuthorizationDialogComponent, config);

        dialogRef.afterClosed().subscribe(() => {
        });
    }

    getRef(fullPageRef) {
        this.fullpage_api = fullPageRef;
    }


    ngOnInit() {
    }

}
