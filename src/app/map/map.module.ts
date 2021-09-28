import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityComponent } from './city/city.component';
import { RegionComponent } from './region/region.component';
import { PlakaComponent } from './plaka/plaka.component';
import { MapComponent } from './map/map.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MapService } from 'src/libs';
import { IgxButtonModule } from 'igniteui-angular';
const routes: Routes = [
  {
    path: "",
    component: MapComponent
  }
]

@NgModule({
  declarations: [
    CityComponent,
    RegionComponent,
    PlakaComponent,
    MapComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), FormsModule,IgxButtonModule
  ],
  providers:[MapService] //Provide etme nedeni: angular map modül içerisindeki declaration lara instance ını oluşturma imkanı sağlar
  //Nereye declare edildiyse oranın altında bulunan tüm componentlerde kullanılacak instance oluşturulmasını sağlar
})
export class MapModule { }
