import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import {IgxButtonModule} from "igniteui-angular";

//LazyLoading için işlem yapılıyor

const routes: Routes =[ //Routing
  {
    path:"", ///home/1 şeklinde kontrol yapılabilir , bu routing e yanına bir path gelmediği zaman home componenti çağırılsın
    component:HomeComponent
  }
]

@NgModule({
  declarations: [HomeComponent], //Bu modül içerisinde homecomponent kullanılabilir
  imports: [
    CommonModule,
    RouterModule.forChild(routes), //Router modülünü bu rout a bildirmemiz gerekiyor,
    IgxButtonModule //sadece home componentinde gelir
  ]
})
export class HomeModule { }
