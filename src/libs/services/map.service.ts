import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

interface city {
  id:number;
  name:string;
  plaka:number;
  region:string; //? => olmasa da olur demektir.
}

@Injectable({
  providedIn: 'root'
})
export class MapService {
//Servis üzerinden besleniyor plaka,region ve city
//Servis mock datası kaydetmiyor sabit kalıcı datalar değildir, proje her reflesh olduğunda eklenen değişen datalar kaybolur .
//Cities mock datadır ve servis mock datalarla bu sebeple kullanılmaz.
//Sabit olarak kaydetmesi için 1)cities arrayini cookie ya da local storage olarak browserda tutulabilir browserda tutulacağı için sadece ekleyen kişi görür cash i temizlemediği sürece görür
//2)**Kayıt işlemlerini htpp call yaparak veritabanına kaydedip servisten başarılı başarısız şeklinde bir responsive dönecek buna göre kullanıcıya bilgi verilecek (genelde kullanılan )


  cities = [
    {
      id: 1,
      name: "İstanbul",
      region:"Marmara", //birbirinden bağımsız component olduğu için kapatıldı
      plaka:34
    },
    {
      id: 2,
      name: "İzmir",
      region:"Ege",
      plaka:35
    },
    {
      id: 3,
      name: "Ankara",
      region:"Anadolu",
      plaka:6
    },
    {
      id: 4,
      name: "Kütahya",
      region:"Anadolu",
      plaka:43
    },
    {
      id: 5,
      name: "Antalya",
      region:"Akdeniz",
      plaka:7
    },
    {
      id: 6,
      name: "Samsun",
      region:"Karadeniz",
      plaka:55
    }
  ];

  //1)Subject kullanarak  crud işlemlerinden sonra data yenileme
  //Componentlerde yaşınılan data sorununu çözmek için: observable kullanacağız
  //subject tanımlayacağız ve içerisine data atacağız, sonra servisten gelmiş http response gibi bu subjecte subscribe olup içindeki data handle edilecek
  public cityNameSubject =new Subject<any>(); // http response gibi subscribe olabileceğimiz value
  public cityPlakaSubject=new Subject<any>();
  public cityRegionSubject=new Subject<any>();


  //2)Behaviour Subject kullanarak  crud işlemlerinden sonra data yenileme
  private cityNameDataSubject$:BehaviorSubject<any> = new BehaviorSubject([]);
  cityNameDataSubject = this.cityNameDataSubject$.asObservable(); //servis tarafında observable a çevirirsem zaten dinlenecek  halde olduğu için kullanılabilir




  constructor() { }

   //Her component için ayrı ayrı metot yazılması gerekiyor

   getCityNames()
   {
     const data= this.cities.map(elem=>({
       id:elem.id,
       name:elem.name
     }));
     //1) this.cityNameSubject.next(data); //next:  cityNameSubject sürekli değişebilen bir yapı, sürekli dinle burayı sürekli stream içinde datanın değeri değişebilir, bu yüzden subscribe ol dinle ve datanın değişkliğini ben kendim belirleyeceğim demek
     //save de cities arrayi değiştiğinde burası tekrar tetiklenecek buradaki data citynamesubject sürekli değişmiş olacak
      
    this.cityNameDataSubject$.next(data); //cityNameDataSubject buna atılmaz bu observable olmuş hali zaten
    }

   getCityPlakas(){
     const data=this.cities.map(elem=>({
       id:elem.id,
       name:elem.name,
       plaka:elem.plaka
     }));
     this.cityPlakaSubject.next(data);
   }

   getCityRegions(){
     const data=this.cities.map(elem=>({
       id:elem.id,
       name:elem.name,
       region:elem.region
     }));
     this.cityRegionSubject.next(data);
   }

   save(value:city){ //value city elementinin içinde varsa update edecek, yok ise push ile ekleyecek
     const index=this.cities.findIndex(el=>el.id === value.id);

     if(index > -1)
     {
       this.cities[index]=value;
     }
     else{
       this.cities.push(value);
     }

     //save olduktan sonra subjecte yeni dataları eklemek için metodları tekrar tetiklemek gerekiyor
     this.getCityNames();
     this.getCityPlakas();
     this.getCityRegions();
   }
}
