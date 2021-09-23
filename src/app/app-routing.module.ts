import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthChildGuard, AuthExitGuard, AuthGuard } from 'src/libs';
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
    loadChildren:()=> import('./role/role.module').then(m=>m.RoleModule)
  },
  {
    path:"user",
    loadChildren:()=> import('./user/user.module').then(m=>m.UserModule)
  },
  
  {
    path:"data-binding",
    loadChildren:()=>import('./data-binding/data-binding.module').then(m=>m.DataBindingModule) //m.DataBindingModule - export ettiğim class ı çağırıyorum
  },
  {
    //directives rootuna gittiğin zaman bu roottan bir activate olduğunda çıkış yaptığın zaman bu guard ı çalıştır
    path:"directives",
    loadChildren:()=>import('./directives/directives.module').then(m=>m.DirectivesModule) ,
    //canDeactivate: Directives root undan çıkarken ki anda bu guard çalışıyor ve bellirli kontrol mekanizmaları sağlıyor, true ya da false dönerek bu sayfadan ayrılık ayrılmaması gerektiğine karar veriyor
    canDeactivate:[AuthExitGuard]
  },
  {
    path:"pipes",
    loadChildren:()=>import('./pipes/pipes.module').then(m=>m.PipesModule) 
  },
  {
    path:"parents",
    loadChildren:()=>import('./parents/parents.module').then(m=>m.ParentsModule) 
  },
  {
    path:"map",
    loadChildren:()=>import('./map/map.module').then(m=>m.MapModule) 
  },
  //{
     //sayfalar arasında geçiş yaparken user/:id gönderildiğinde buradaki id yi parametre olarak alabilmek için 
     //user-detail daki user-detail.component.ts ye gidilir.
    //path:"user/:id", //user ın altındaki user-detail a ulaşmak için parametre bekliyorum buda id, bu id ye istenilen ad verilebilir bu url e gidildiğinde verilen parametre çekileceğinde  .id olarak çekilecek.
    //component:UserDetailComponent
  //},
  //Kullanıcı bunlardan hiç birine uygun olmayan url girerse
  {
  path:"storage", //Storage olarak gelirse
  loadChildren:()=>import('./storage/storage.module').then(m=>m.StorageModule), //storage modül classını import edece
   
  //Storage e gittiğinde canActivate yap, storage aktif olduğu anda çalışacak bir guard

  //bu url her çalıştığında guard çalışacak
  //storage.module e de eklenebilirdi.
  canActivate:[AuthGuard] //storage çalıştığı anda modüller arası gidilip gidilemeyeceğine AuthGuard karar verecek
},

  {
    path:"**",
    component:HomeComponent //yanlışta girse home a gidecek.
    //veya   -  loadChildren:()=>import("./home/home.module").then(m=>m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})], //{useHash:true} =>artık html in kendi path stratejisini değil angular hash location stratejisi kullanılır.
  exports: [RouterModule]                                 //{useHash:true} =>child rootlara giderken anguların stratejisini kullanmamıza yarar, araya # atar. # atarsa bulunduğum sayfaya geri gönderir ve göstermeye devam eder
})
//Proje routing modülünden yönetiliyor
export class AppRoutingModule { } //app.module.ts ye import ettik

//canActivate ve canActivateChild rol yetkilerine göre kullanılır user a yetkim var ama childlarına yetkim yoksa bu guard kullanılarak erişim engellenebilir.Birden fazla guard kullanılabilir.
//canDeactivate genel olarak kullanılır yetki için değil
