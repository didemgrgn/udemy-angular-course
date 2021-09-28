import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DataBindingComponent } from './data-binding.component';
import { FormsModule } from '@angular/forms';
import { IgxButtonModule } from 'igniteui-angular';

const routes:Routes = [
  {
  path:"",
  component:DataBindingComponent
}
];

@NgModule({
  declarations: [DataBindingComponent],
  imports: [
    CommonModule,IgxButtonModule,RouterModule.forChild(routes),FormsModule //FormsModule  - ngModel kullanabilmek için gereklidir.
  ]
})
export class DataBindingModule { }
