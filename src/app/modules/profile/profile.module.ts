import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

// material
import {
    MatButtonModule,
} from '@angular/material';

// components
import {ProfileComponent} from './components/profile/profile.component';


@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: ProfileComponent
            }
        ]),

        MatButtonModule
    ]
})
export class ProfileModule {
}
