import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/libs';

@Component({
  selector: 'app-plaka',
  templateUrl: './plaka.component.html',
  styleUrls: ['./plaka.component.scss']
})
export class PlakaComponent implements OnInit {

   plakaData:any;

  constructor(private mapService:MapService) { 
    this.mapService.cityPlakaSubject.subscribe(data=>{ //componentte call edildi ve dataya aktarıldı
      this.plakaData=data;
    })
  }

  ngOnInit(): void {
    this.mapService.getCityPlakas(); //metodu çağırması yeterli
  }

}
