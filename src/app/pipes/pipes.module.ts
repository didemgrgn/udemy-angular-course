import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MyFilteringPipe, TlPipe } from 'src/libs';

const routes: Routes=[
  {
    path:"",
    component: PipesComponent
  }
]

@NgModule({
  declarations: [
    PipesComponent,
   TlPipe, //declare edildi
    MyFilteringPipe
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule //FormsModule binding işlemleri yapacağımız için eklendi
  ]
})
export class PipesModule { }
