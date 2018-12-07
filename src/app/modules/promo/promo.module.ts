import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PromoComponent} from './components/promo/promo.component';
import {AngularFullpageModule} from '@fullpage/angular-fullpage';
import {MatButtonModule} from '@angular/material';

@NgModule({
    declarations: [PromoComponent],
    imports: [
        CommonModule,
        AngularFullpageModule,
        MatButtonModule,
    ]
})
export class PromoModule {
}
