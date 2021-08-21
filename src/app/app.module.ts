import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; //CUSTOM_ELEMENTS_SCHEMA: Haberdar olmadığı şeyleri çalıştırmak için yazıldı
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr'; //toastr import edildi
import { NgxSpinnerModule } from "ngx-spinner"; //Spinner import edildi
import { IgxButtonModule } from 'igniteui-angular';//ignite button modülü import edildi.

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({ //app modelülün altında tüm rootlarda toastr modülünün çalışacağını belirtir
      timeOut:4000, //4 saniye çalışıcak
      progressBar:true,
      easing:"ease-in",
      closeButton: false,
      progressAnimation: "decreasing",
      preventDuplicates: true,
      positionClass: "toast-bottom-left"
    }), // ToastrModule added
    NgxSpinnerModule, //ngx-spinner import edildi
    IgxButtonModule //ignite button modülü import edildi.
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]//ngx-spinner import edildi
})
export class AppModule { }
