import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HighlightDirective, UploadService } from 'src/libs';
import { FileUploadComponent } from './file-upload/file-upload.component';

const routes: Routes =[ 
  {
    path:"", 
    component:FileUploadComponent
  }
]

@NgModule({
  declarations: [ 
    FileUploadComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule],
  providers:[UploadService]
})
export class FileUploadModule { }
