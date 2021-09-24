import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import ButtonComponent from 'src/stories/button.component';
import { IgxButtonModule } from 'igniteui-angular';

const routes: Routes =[ 
  {
    path:"", 
    //component:DirectivesComponent
  }
]

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule,IgxButtonModule
  ]
})
export class StorybookModule { }
