import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {
    MatButtonModule, MatButtonToggleModule,
    MatDatepickerModule,
    MatDialogModule, MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule, MatProgressSpinnerModule,
    MatSelectModule
} from '@angular/material';

// components
import {AuthorizationDialogComponent} from './components/authorization-dialog/authorization-dialog.component';

@NgModule({
    declarations: [
        AuthorizationDialogComponent
    ],
    entryComponents: [
        AuthorizationDialogComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        // Material Modules
        MatButtonModule,
        MatDatepickerModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatDividerModule,
        MatButtonToggleModule
    ]
})
export class AuthorizationModule {
}
