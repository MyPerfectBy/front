// angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// material
import {
    MatButtonModule,
    MatDatepickerModule, MatDialogModule,
    MatFormFieldModule, MatIconModule,
    MatInputModule,
    MatSelectModule
} from '@angular/material';

// components
import { PerformerRegistrationDialogComponent } from './components/performer-registeting-dialog/performer-registration-dialog.component';

@NgModule({
  declarations: [PerformerRegistrationDialogComponent],
  entryComponents: [
      PerformerRegistrationDialogComponent,
  ],
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,

      MatButtonModule,
      MatDatepickerModule,
      MatDialogModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatSelectModule,
  ]
})
export class RegistrationModule { }