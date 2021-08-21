import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserRoleComponent } from './user/user-role/user-role.component';
import { RouterModule, Routes } from '@angular/router';
import {IgxButtonModule} from "igniteui-angular";
//Route tanımlıyoruz
//Routing de okuma yukarıdan aşağı doğru olur
const routes: Routes =[
  {
    path:"",
    component: UserListComponent
  },
  {
    path:":id", //ekstra bir parametre gönderirsem usercomponent çalışsın
    component: UserComponent,
    children:[//user /5 yazıldığında sonrasında başka routler olması gerektiğini bildirmek istersek children denmesi gerek,
        {
          path:"details",
          component:UserDetailsComponent
        },
        {
          path:"role",
          component:UserRoleComponent
        },
        //Farklı url lerde istek yapılırsa
        {
          path:"",
          redirectTo:"details", //ne olursa olsun detail componentine gitsin
          pathMatch: "full" //tam eşleşmesi için
        }
    ]//usercomponent in childrenları var user-role ve user-details
  },
  {

  }
]

@NgModule({
  declarations: [
    UserListComponent,
    UserComponent,
    UserDetailsComponent,
    UserRoleComponent,
  ],
  imports: [
    CommonModule,IgxButtonModule,RouterModule.forChild(routes)
  ]
})
export class UserModule { }
