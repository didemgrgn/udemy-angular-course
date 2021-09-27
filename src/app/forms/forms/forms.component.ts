import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { time } from 'console';
import { BlackListValidator, UserNameExistValidator, UserService, WhiteSpaceValidator } from 'src/libs';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  registerForm!: FormGroup; //Türü tanımlandı

  //Reactive form  ile edit eşitleme (pathvalu)
  user = { //kayıt ettikten sonra kayıt işlemi yapılması için
    username: "didem",
    age: 27
  }


  constructor(private userService: UserService) { }//private userServis:UserService => yazıldığı an instance oluşuyor 

  ngOnInit() {
    this.resetForm(); //proje çalıştığında onInıt e geldiğinde burada tetiklenecek
  }

  //Template Driven
  save(event: any) {
    this.user=event.value;//value usera eşitlendi
    console.log( "user saved",this.user);
  }

//Reactive form  ile edit eşitleme (pathvalu) -otomatik user name türetecek 
  randomUsername(event:any){
    this.registerForm.patchValue({
      username: "test-123",
      age:1234  
    });
  }

  resetForm() {
    //Validators 
    this.registerForm = new FormGroup({ //instence tanımlandı, içerisinde formcontroller tanımlandı
      //Formcontrol(,) ün içerisine ilk verdiğim parametre başlangıç value su olur. (,) virgülden sonra ise  updateon ile validatior lerı ne zaman tetikleyeceği yani değişiklik yapıldığında anlık mı tetiklesin yoksa hepsi bitince dışarı bir yere tıkladıktan sonra mı güncellensin yazılır 
       //this.user ? this.user.username : 
       //Reactive form  ile edit eşitleme (pathvalu)  => user varsa username olsun  yoksa emty olabilir
      username: new FormControl("", {
        validators: [ //birden fazla validate alabilir
          Validators.required, //bu alan zorunludur bu alan olmadan form valid olmayacaktır kontrolü
          Validators.minLength(3), //En az 3 karakter olmak zorunda
          Validators.maxLength(15), //bu koşullar olduğu zaman username valid olur, sağlanmadığı taktirda valid değildir

          //Custom Validators
          BlackListValidator('ğ'),

          //Custom Validators -part2 (whitespace validators)
        

        ],
        //Custom asycn validator
        //aldığı input bir servis olmak zorunda ya da input almayıp kendisi http call yapabiliyor
        //asyncValidators:[UserNameExistValidator(this.userService)], YAPAMADIM 64.bölüm

        //Custom Validators -part2 (whitespace validators)
        //boşluk girer girmez hata çıkmaması için
        //blur:  kullanıcım inputtan çıkmadığı sürece başka bir input veya o elementten dışarı tıklamadığı sürece aktif olmayacak demektir.
        updateOn: "blur" //tüm form kontrolü blur olarak çalışsın demektir sadece boşluk için değil

      }), //Her bir control ün valid olması formuda etkiler, form valid iken username invalid olursa doğrudan form da invalid olur.
      age: new FormControl(this.user ? this.user.age : 0) //user varsa age i gelsin açılınca doğrudan 27 gelecek
    });
  }

}
