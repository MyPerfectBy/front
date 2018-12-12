import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthorizationDialogComponent} from './components/authorization-dialog/authorization-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule, MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [AuthorizationDialogComponent],
    entryComponents: [AuthorizationDialogComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,

        // Material Modules
        MatButtonModule,
        MatDatepickerModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatDividerModule
    ]
})
export class AuthorizationModule {
}
