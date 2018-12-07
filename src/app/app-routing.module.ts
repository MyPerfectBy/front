import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PromoComponent} from './modules/promo/components/promo/promo.component';

const routes: Routes = [
    {
        path: '',
        component: PromoComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
