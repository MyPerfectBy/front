// angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// material
import {
    MatButtonModule,
    MatDatepickerModule, MatDialogModule,
    MatFormFieldModule, MatIconModule,
    MatInputModule, MatProgressSpinnerModule,
    MatSelectModule
} from '@angular/material';

// components
import { PerformerRegistrationDialogComponent } from './components/performer-registration-dialog/performer-registration-dialog.component';

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
      MatProgressSpinnerModule,
      MatSelectModule
  ]
})
export class RegistrationModule { }
