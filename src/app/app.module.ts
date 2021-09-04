import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; //CUSTOM_ELEMENTS_SCHEMA: Haberdar olmadığı şeyleri çalıştırmak için yazıldı
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
import { IgxNavbarModule, IgxIconModule, IgxNavigationDrawerModule } from 'igniteui-angular';
//import { DataBindingComponent } from './data-binding/data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    //HomeComponent,
    //UserComponent,
    RoleComponent,
    NavbarComponent,
    SidebarComponent,
    //DataBindingComponent,
    //UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      progressBar: true,
      easing: "ease-in",
      closeButton: false,
      progressAnimation: "decreasing",
      preventDuplicates: true,
      positionClass: "toast-bottom-left"
    }),
    NgxSpinnerModule,
    //IgxButtonModule //ignite button modülü import edildi. //IgxButton burada tanımlanırsa sadece yukarıdaki declarations larda kullanılabilir
    IgxNavbarModule,
    IgxIconModule,
    IgxNavigationDrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] //ngx-spinner import edildi
})
export class AppModule {
}
