import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RoleComponent } from './role.component';
import { FormsModule } from '@angular/forms';
import { RoleService } from 'src/libs';

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
    FormsModule
  ],
  providers:[RoleService] //angular kullanacağımız componenette instance ını oluştuması için eklendi
  //declare edilen componentlerde instance ını kullanabiliriz.
})
export class RoleModule { }
