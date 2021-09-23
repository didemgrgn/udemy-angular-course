import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  title="aNkaRa türKİYEnin başkenTidir!";
  today: string | undefined;
  cashValue= 14343.344 ;
  percentVal=3213.43;
  turkishUpperCaseVal: any;
  objectVal: Object = {
    foo: "bar",
    baz: "qux",
    nested: {xyz: 3,numbers:[1,2,3,4,5]} //obje içerisine obje oluşturulmuş
  };
  cityName="İstanbul";
  cash=1500;

  cities =[
    "istanbul","izmir","ankara","antalya","mersin","samsun"
  ];

  constructor() { }

  ngOnInit() {
    this.today=new Date().toDateString();
    this.turkishUpperCaseVal=(this.title as any).toLocaleUpperCase("tr-TR");//Türkçe karakterlerin gelmesi için yapılması gereken transform
  }


}
