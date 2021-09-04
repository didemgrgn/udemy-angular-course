import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DataBindingComponent } from './data-binding.component';
import { FormsModule } from '@angular/forms';

const routes:Routes = [
  {
  path:"",
  component:DataBindingComponent
}
];

@NgModule({
  declarations: [DataBindingComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule //FormsModule  - ngModel kullanabilmek için gereklidir.
  ]
})
export class DataBindingModule { }
