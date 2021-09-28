import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RoleComponent } from './role.component';
import { FormsModule } from '@angular/forms';
import { RoleService } from 'src/libs';
import { IgxButtonModule } from 'igniteui-angular';
const routes: Routes =[
  {
    path:"",
    component:RoleComponent
  }
];

@NgModule({
  declarations: [RoleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    IgxButtonModule
  ],
  providers:[RoleService] //angular kullanacağımız componenette instance ını oluştuması için eklendi
  //declare edilen componentlerde instance ını kullanabiliriz.
})
export class RoleModule { }
