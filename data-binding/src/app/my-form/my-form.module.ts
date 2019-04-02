import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFormComponent } from './my-form.component';

@NgModule({
  declarations: [MyFormComponent],
  imports: [
    CommonModule
  ],
  exports: [MyFormComponent]
})
export class MyFormModule { }
