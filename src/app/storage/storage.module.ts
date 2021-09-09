import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageComponent } from './local-storage/local-storage.component';
import { CookieComponent } from './cookie/cookie.component';
import { HomeComponent } from '../home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes=[
  {
    path:"",
    children: [//stroge altında iki tane component olduğu için(cookie,local-storage)  roota geldiği zaman hangisinin aktif olacağının belirlenmesi
      {
        path:"cookie", //cookie gelirse 
        component:CookieComponent //bu component çalışsın
      },
      {
        path:"local-storage",
        component:LocalStorageComponent
      },
      {
        path:"", //her ikisi de gelmezse 
        redirectTo:"local-storage",  //bu componenti çalıştır
        pathMatch:"full"
      }
    ]
  }
]

@NgModule({
  declarations: [
    LocalStorageComponent,
    CookieComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule //FormsModule ekledik two way binding kullanacağız
  ]
})
export class StorageModule { }
