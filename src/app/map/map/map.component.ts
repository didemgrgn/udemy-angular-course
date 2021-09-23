import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MapService } from 'src/libs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  //map componenti map rootuna gittiği zaman sadece map çalışsın bu map içerisine city,plaka,region manuel eklenmesi istediği için açıldı
  
  //Eklendikten sonra componentlerin tetiklenmesi için servisten değiştirdiğimiz datayı dinleyebilecek bir component yapısıdır.
  
  constructor(private mapService: MapService) { }
  
  ngOnInit(): void {
  }

  save(form: NgForm) {
    this.mapService.save(form.value);

  }

}
