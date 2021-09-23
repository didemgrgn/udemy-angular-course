import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { enableProdMode } from '@angular/core';

//interface role{  //role bu şekilde de tanımlanabilir
//  id:number, name:string
//}

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  connection = environment.api.nestjs.role + "/role"; //role servisindeki http i url i burasıdır. //Request url eklenmesi 1.yöntem : "/role"
  constructor(private http: HttpClient) { }//http ye istek atıldı

  getAllRoles() {
    //2.yönetim her istekte eklenebilir: const apiUrl=this.connection +"/role";

    return this.http.get<any>(this.connection); //this.connection => url çağırıldı
    //get isteği yapılıyor componentte subscribe olunması gerekiyor çünkü burası bir observable değer gönderir

    //Servise parametre vb. göndermek isteyebilir , sonradan oluşturduğumuz search parametresini bu şekilde bildirebiliriz
    //return this.http.get<any>(this.connection, {search: }); //request param: genellikle listelerde yapılır , listenin 5.sayfasını istiyorum 10 luk 10 luk gönder gibi bilgileri göndermeye yarar.
  }

  addRole(role: any) { //http nin kendisi observable olarak dönülecek, subscribe component te olunacak

    return this.http.post<any>(this.connection, role); //url den sonra bir body(bilgi) bekliyor.
  }

  //Http put isteği ile update işlemi
  editRole(role: any) {
    return this.http.put<any>(this.connection + `/${role.id}`, role); //domain /role/id , bu adrese gidip role value su vererek update işlemi yapılır.
  }

  //Http Delete isteği
  deleteRole(role: any) {
    //interface ile veri tipi belirtilebilir, any yerine
    return this.http.delete<any>(this.connection + `/${role.id}`, role); //bana gelen value yu aynen geri gönderiyorum
  }


}
