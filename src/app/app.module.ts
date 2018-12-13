import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';





// modules
import {ApiModule} from './modules/api/api.module';
import {AppRoutingModule} from './app-routing.module';
import {AuthorizationModule} from './modules/authorization/authorization.module';
import {PromoModule} from './modules/promo/promo.module';
import {RegistrationModule} from './modules/registration/registration.module';
// components
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
// services
import {UserService} from './domain/services/user.service';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,

        AppRoutingModule,

        // Application Modules
        ApiModule,
        AuthorizationModule,
        PromoModule,
        RegistrationModule,
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
