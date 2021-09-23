import { Component, OnInit, ViewChild } from '@angular/core';
import { Child1Component } from 'src/libs';


@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.scss']
})
export class Parent1Component implements OnInit {

  //Parent componentten child componentte olan bir motet triggerlama @Viewchild
  //Parent componentten child componentte olan bir motet triggerlama @Viewchild

  @ViewChild(Child1Component) child1!: Child1Component;



  name="";
  successStatus=0;
  
  calculaterData: any;

  constructor() { }

  ngOnInit(): void {}

  calculate(){ //bu method calculaterData yı aktif edecek
       this.calculaterData= {
         name:this.name,
         status:this.successStatus
       };
  }
  
  //1.yöntem
  //resetParentForm(){
  //  this.name="";  // child componentten bir event emite edildi ve parent component ona göre name ve success bilgileri sıfırlandı
  //  this.successStatus=0;
  //}

   //2.yöntem
   resetParentForm(event : any){
    alert(event);
    this.name="";  // child componentten bir event emite edildi ve parent component ona göre name ve success bilgileri sıfırlandı
    this.successStatus=0;
  }




   


}
