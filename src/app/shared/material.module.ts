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
  MatPaginatorModule,
  MatSortModule
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
    MatPaginatorModule,
    MatSortModule
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
    MatPaginatorModule,
    MatSortModule
  ]
})
export class MaterialModule { }
