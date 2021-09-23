import { Component, OnInit, ViewChild } from '@angular/core';
import { MapService } from 'src/libs';
import { PlakaComponent } from '../plaka/plaka.component';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  //Bir işlem gerçekleştiğinde kaydettiğim düzenlediğim datalar kaybolmaması için servise ihtiyaç duyulmaktadır.

  //Şehirlerde yaptığım değişiklikte Plakalar ve Bölgeler etkilenmiyor bunun için ViewChild eklenebilir ama her componenti birbirine bağlamak uzun bir iş olacağı için service kullanılması doğru olacaktır.
  //@ViewChild('PlakaComponent') plakaCmp:PlakaComponent | undefined


  //cities = [
  //  {
  //    id: 1,
  //    name: "İstanbul",
  //region:"Marmara", //birbirinden bağımsız component olduğu için kapatıldı
  //plaka:34
  //  },
  //  {
  //    id: 2,
  //    name: "İzmir",
  //region:"Ege",
  //plaka:35
  //  },
  //  {
  //    id: 3,
  //    name: "Ankara",
  //region:"Anadolu",
  //plaka:6
  //  },
  //  {
  //    id: 4,
  //    name: "Kütahya",
  //region:"Anadolu",
  //plaka:43
  //  },
  //  {
  //     id: 5,
  //     name: "Antalya",
  //region:"Akdeniz",
  //plaka:7
  //  },
  //  {
  //    id: 6,
  //    name: "Samsun",
  //region:"Karadeniz",
  //plaka:55
  // }
  //];

  //cityId = 0;
  //cityName = "";

  citiesData: any; //observable sürekli dinlenebilen bir data olsaydı map servisteki cities verisini değiştirsem burada da gösterebilecekti.

  citiesData$;

  constructor(private mapService: MapService) {//map.module deki provide instance ı kullanmak için yazıldı

    //1) mapService.cityNameSubject.subscribe(data=>{//data handle edildi
    //   this.citiesData=data; //cityNameSubject değişirse data da değişeceği için cities anlık değişecek
    //});

    this.citiesData$=mapService.cityNameDataSubject;

  }

  ngOnInit(): void {

    this.mapService.getCityNames(); //getCityNames id ve name dönüyor
    //çalıştığı zaman citiesData yı doldursun,  başka hiç bir zaman haberleşme sağlamasın denildi, datanın dğeişip değişmediği sorgulanmıyor
  }

  //save() { //id si varsa update etsin yoksa kaydetsin
  //  const index = this.cities.findIndex(el => el.id === this.cityId);
  //  if (index > -1) {
  //        this.cities[index]={id:this.cityId,name:this.cityName}; //update
  //  }
  //  else {
  //    this.cities.push({id: this.cityId, name: this.cityName}); //kaydediyor
  //  }
  // }

}
