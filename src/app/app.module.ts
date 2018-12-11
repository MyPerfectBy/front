import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PromoModule} from './modules/promo/promo.module';

// modules
import {HeaderComponent} from './components/header/header.component';
import {RegistrationModule} from './modules/registration/registration.module';
// services
import {UserService} from './domain/services/user.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,

        // Application Modules
        PromoModule,
        RegistrationModule
    ],
    providers: [
        {
            provide: UserService,
            useClass: UserService,
            deps: []
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
