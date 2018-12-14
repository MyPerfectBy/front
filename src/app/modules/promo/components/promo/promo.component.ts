import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';

// rxjs
import {Observable, Subject, Subscription} from 'rxjs';
import {filter, switchMap, takeUntil, tap} from 'rxjs/operators';

// models
import {User} from '../../../../domain/models/user.model';
// components
import {
    AuthorizationDialogComponent
} from '../../../authorization/components/authorization-dialog/authorization-dialog.component';
import {
    PerformerRegistrationDialogComponent
} from '../../../registration/components/performer-registration-dialog/performer-registration-dialog.component';
// services
import {AuthorizationService} from '../../../authorization/services/authorization.service';

@Component({
    selector: 'app-promo',
    templateUrl: './promo.component.html',
    styleUrls: ['./promo.component.scss']
})
export class PromoComponent implements OnInit, OnDestroy {

    config: any;

    fullpage_api: any;

    private destroy$ = new Subject();

    private querySubscription: Subscription;

    constructor(private dialogService: MatDialog, private route: ActivatedRoute, private router: Router,
                private authorizationService: AuthorizationService) {

        this.config = {
            menu: '#menu'
        };

        this.querySubscription = route.queryParams.subscribe(
            (queryParam: any) => {
                const code = queryParam['code'];

                if (code) {

                    this.authorizationService.authorizeByVk(code).pipe(
                        switchMap((): Observable<User> => this.authorizationService.getUser()),
                        filter((user: User): boolean => !!user),
                        tap((user: User): void => {

                            this.router.navigate([user.username]);
                        }),
                        takeUntil(this.destroy$)
                    ).subscribe((result) => console.log(result) );
                }
            }
        );
    }

    openPerformerRegistrationDialog(): void {

        this.dialogService.open(PerformerRegistrationDialogComponent);
    }

    openAuthorizationDialog(): void {

        const dialogRef = this.dialogService.open(AuthorizationDialogComponent);

        dialogRef.afterClosed()
            .pipe(
                switchMap((): Observable<User> => this.authorizationService.getUser()),
                filter((user: User): boolean => !!user),
                tap((user: User): void => {

                    this.router.navigate([user.username]);
                }),
                takeUntil(this.destroy$)
            )
            .subscribe();
    }

    getRef(fullPageRef) {
        this.fullpage_api = fullPageRef;
    }

// lifecycle hooks -------------------------------------------------------------------------------------------------------------------------

    ngOnInit() {
    }

    ngOnDestroy(): void {

        this.destroy$.next();

        this.destroy$.unsubscribe();
    }

}
