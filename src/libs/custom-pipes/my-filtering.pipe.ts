import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFiltering'
})
export class MyFilteringPipe implements PipeTransform {

  transform(value: string[], ...args: any[]): any { //value: unknown du yazılan değere göre değiştirilebilir.
    let result: any[] =[]; //herhangi bir array aldığı değer boş
    value.forEach(element => { //value cities array dir. Aldığımız value yu dönüyoruz
      const isExistLetter =element.includes(args[0].toString());//0.indexinde ki değer bu string in içinde varsa eklenmek istiyor değilse kalsın    
      if(isExistLetter){ //isExistLetter true ise
        result.push(element);  //true ise bu elementi resul array ine push yapıyor
      }
    });
    return result; //ve bu result arrayi dönüyor
  }

}
