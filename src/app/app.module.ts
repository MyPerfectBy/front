import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PromoModule} from './modules/promo/promo.module';

// modules
import {AuthorizationModule} from './modules/authorization/authorization.module';
import {HeaderComponent} from './components/header/header.component';
import {RegistrationModule} from './modules/registration/registration.module';
// services
import {UserService} from './domain/services/user.service';
import { GraphQLModule } from './modules/graphql/graphql.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,

        AppRoutingModule,

        // Application Modules
        AuthorizationModule,
        PromoModule,
        RegistrationModule,
        GraphQLModule,
        HttpClientModule
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
