import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PromoModule} from './modules/promo/promo.module';

// modules
import {RegistrationModule} from './modules/registration/registration.module';
import {ProfileModule} from './modules/profile/profile.module';
import { HeaderComponent } from './components/header/header.component';

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
    RegistrationModule,
    ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
