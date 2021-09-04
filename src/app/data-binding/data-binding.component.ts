import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  user = { //user objesi
    name: "Didem",
    surname: "Girgin",
    job: "Software Developer",
    favorite_place: "Deniz",
    favorite_place_image: "https://upload.wikimedia.org/wikipedia/commons/5/56/AntalyaSunset.JPG",
    isEditable: true
  };

  type="text";

  constructor() { }

  ngOnInit(): void { }

  buttonClicked(){
    alert("clicked");
  }

  inputSubmit(value:any){
   //console.log(value);
    alert(value.target.value + " geldi..");
  }

  //changeEditable(){
  //  this.user.isEditable =! this.user.isEditable; //toglle ladı
  //}
}
