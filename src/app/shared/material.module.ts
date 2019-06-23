import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MatButtonModule, 
  MatCheckboxModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatDatepickerModule, 
  MatNativeDateModule, 
  MatSelectModule, 
  MatSnackBarModule, 
  MatTableModule, 
  MatIconModule, 
} from '@angular/material';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatSelectModule, 
    MatSnackBarModule, 
    MatTableModule, 
    MatIconModule, 
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatSelectModule, 
    MatSnackBarModule, 
    MatTableModule, 
    MatIconModule, 
  ]
})
export class MaterialModule { }
