import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_LABEL_GLOBAL_OPTIONS, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule, //for grid column
    MatFormFieldModule, //form
    MatInputModule, //input
    MatRadioModule, //mat-radio-group -radio button
    MatDatepickerModule, //matDatepicker - datepicker
    MatNativeDateModule, // required for datepicker
    MatSelectModule, // mat-select - checkbox
    MatCheckboxModule, // for button
    MatButtonModule,
    MatToolbarModule,
  ],
  exports: [
    MatGridListModule, //for grid column
    MatFormFieldModule, //form
    MatInputModule, //input
    MatRadioModule, //mat-radio-group -radio button
    MatDatepickerModule, //matDatepicker - datepicker
    MatNativeDateModule, // required for datepicker
    MatSelectModule, // mat-select - checkbox
    MatCheckboxModule, // for button
    MatButtonModule,
    MatToolbarModule,
  ]
})
export class MaterialModule { }
