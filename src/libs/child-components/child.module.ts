import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child1Component } from './child1/child1.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [Child1Component], //Child1Component declare edildi
  imports: [
    CommonModule,
    FormsModule //data binding olması için eklendi
  ],
  exports: [Child1Component] //başka modüllerinde bu componente erişebilmesi ve declare edebilmesi içinde export edilmesi gerekiyor
})
export class ChildModule { } //Child1Component componenti kullanan için bu modülü import eden başka bir future modül declare olarak kullanabilsin, erişebilsin demektedir export
