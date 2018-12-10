import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// components
import {PromoComponent} from './modules/promo/components/promo/promo.component';

const routes: Routes = [
    {
        path: '',
        component: PromoComponent
    },
    {
        path: ':username',
        loadChildren: 'src/app/modules/profile/profile.module#ProfileModule'
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(routes)
    ],
})
export class AppRoutingModule {
}
