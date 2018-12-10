import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PromoComponent} from './modules/promo/components/promo/promo.component';
import {ProfileComponent} from './modules/profile/components/profile/profile.component';

const routes: Routes = [
    {
        path: '',
        component: PromoComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
