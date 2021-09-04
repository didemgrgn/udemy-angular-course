import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoleComponent } from './role/role.component';


const routes: Routes = [
  { //Eklemek istediğimiz her route u burada array içerisinde objelerle tanımlayacağız
     path:"home", // /home  denildiğinde 
     //component:HomeComponent //home componenetine gidecek
     //Lazy loading ile işlem yapılacak, karmaşık yapılarda birden fazla paketler olduğunda kullanılır.
     loadChildren:() => import('./home/home.module').then(m=>m.HomeModule)
  },
  {
    path:"role",
    component:RoleComponent
  },
  {
    path:"user",
    loadChildren:()=> import('./user/user.module').then(m=>m.UserModule)
  },
  
  {
    path:"data-binding",
    loadChildren:()=>import('./data-binding/data-binding.module').then(m=>m.DataBindingModule) //m.DataBindingModule - export ettiğim class ı çağırıyorum
  },
  //{
     //sayfalar arasında geçiş yaparken user/:id gönderildiğinde buradaki id yi parametre olarak alabilmek için 
     //user-detail daki user-detail.component.ts ye gidilir.
    //path:"user/:id", //user ın altındaki user-detail a ulaşmak için parametre bekliyorum buda id, bu id ye istenilen ad verilebilir bu url e gidildiğinde verilen parametre çekileceğinde  .id olarak çekilecek.
    //component:UserDetailComponent
  //},
  //Kullanıcı bunlardan hiç birine uygun olmayan url girerse
  {
    path:"**",
    component:HomeComponent //yanlışta girse home a gidecek.
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
//Proje routing modülünden yönetiliyor
export class AppRoutingModule { } //app.module.ts ye import ettik
