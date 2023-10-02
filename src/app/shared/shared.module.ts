import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogAnimationsExampleDialogComponent } from './dialog-animations-example-dialog/dialog-animations-example-dialog.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [

    DialogAnimationsExampleDialogComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    FooterComponent
  ]
})
export class SharedModule { }
