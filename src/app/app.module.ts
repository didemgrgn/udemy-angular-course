import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; //CUSTOM_ELEMENTS_SCHEMA: Haberdar olmadığı şeyleri çalıştırmak için yazıldı
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr'; //toastr import edildi
import { NgxSpinnerModule } from "ngx-spinner"; //Spinner import edildi
//import { IgxButtonModule } from 'igniteui-angular';
//import { HomeComponent } from './home/home.component';
//import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
//import { UserDetailComponent } from './user/user-detail/user-detail.component';//ignite button modülü import edildi.
import { IgxNavbarModule } from 'igniteui-angular'; 
import { IgxIconModule , IgxNavigationDrawerModule} from 'igniteui-angular';

@NgModule({
  declarations: [
    AppComponent,
    //HomeComponent,
    //UserComponent,
    RoleComponent,
    NavbarComponent,
    SidebarComponent,
    //UserDetailComponent
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
    //IgxButtonModule //ignite button modülü import edildi. //IgxButton burada tanımlanırsa sadece yukarıdaki declarations larda kullanılabilir
    IgxNavbarModule, //navbarı her yerde kullanacağımız için app.module e import edildi
    IgxIconModule,
    IgxNavigationDrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]//ngx-spinner import edildi
})
export class AppModule { }
