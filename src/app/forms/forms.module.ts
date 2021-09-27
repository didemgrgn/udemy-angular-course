import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms/forms.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, NG_ASYNC_VALIDATORS, ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/libs';

const routes: Routes=[
  {
    path:"",
    component:FormsComponent
  }
];


@NgModule({
  declarations: [
    FormsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  //Custom asycn validator
  providers:[UserService] //provide olarak ekleniyor bu servisin instance ını oluşturabilmek için
})
export class AngularFormsModule { } //FormsModule ile karışmaması için değiştirildi
