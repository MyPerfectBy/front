import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PromoModule} from './modules/promo/promo.module';

// modules
import {RegistrationModule} from './modules/registration/registration.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        PromoModule,
        RegistrationModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
