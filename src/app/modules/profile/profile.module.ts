import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

// components
import {ProfileComponent} from './components/profile/profile.component';


@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forRoot(
            [
                {
                    path: ':username',
                    component: ProfileComponent
                }
            ]
        )
    ]
})
export class ProfileModule {
}
