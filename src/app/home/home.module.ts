import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { IgxButtonModule } from "igniteui-angular";

import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


//LazyLoading için işlem yapılıyor

const routes: Routes = [ //Routing
  {
    path: "", ///home/1 şeklinde kontrol yapılabilir , bu routing e yanına bir path gelmediği zaman home componenti çağırılsın
    component: HomeComponent
  }
]

@NgModule({
  declarations: [HomeComponent], //Bu modül içerisinde homecomponent kullanılabilir
  imports: [
    CommonModule,
    RouterModule.forChild(routes), //Router modülünü bu rout a bildirmemiz gerekiyor,
    IgxButtonModule, //sadece home componentinde gelir
    TranslateModule.forChild({ //**forChild yapıldı
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class HomeModule { }



//assets dosyaları kendimiz import ediyoruz
//bazen tarayıcıların cash inde kaldığı için ek olarak  ?cb=' + new Date().getTime() eklendi. Proje her build oluduğunda farklı bir json dosyası çıkartacağı için tarayıcıların cahche ine takılmayacaktır
//Her build edildiğinde yeni cahche yeni tarayıcı dosyasını değiştirecektir bu sayede json larda değişiklik yapılırsa tarayıcıdaki eski dosya kalmaz kullanıcılara yansır.
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    "../../assets/i18n/",
    ".json" //?cb=" + new Date().getTime()
    );
}

