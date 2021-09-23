import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RoleService } from 'src/libs';
import { enableProdMode } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit, OnDestroy { //Subscription , OnDestroy: componentin ölümü

  rolesData: any;

  subs1!: Subscription;

  //birden fazla subscribe olduğu zaman yeni bir subscription oluşturulacak
  subs2!: Subscription;

  private subs = new SubSink(); //bütün abonelikleri bunun içerisine ekleyip yönetilebilir,

  constructor(private roleService: RoleService) { } //servis instance edilir


  ngOnInit() {
    this.getRoles(); //component ilk çalıştığı anda getroles ü çalıştıracak ve rolleri dağıtacak
  }

  ngOnDestroy(): void { //Subscription, Componentin ölümü olduğu zaman bu metodu çalıştır
    this.subs1.unsubscribe(); //Subscription,abonelikten çıkmak, 
    //this.subs1.add(this.subs2); ile iki subscription birbirine bağlandığı için  this.subs2.unsubscribe();  yazılmadı.

    this.subs.unsubscribe(); //SubSink, bütün abonelikler iptal olur.
  }

  getRoles() {

    this.subs1 = this.roleService.getAllRoles().subscribe(data => {  //Subscription, subs1 ile bir değere eşitlenir
      this.rolesData = data; //subscribe olduktan sonra gelen data eşitlendi
    });

    //SubSink
    //this.subs.add(
    //  this.roleService.getAllRoles().subscribe(data => { 
    //    this.rolesData = data; 
    //  })
    //  )

    //SubSink , içerisine bir array olarak eklenebilir, birden fazla aboleneliği tek bir subsink e aynı anda eklenebilinir.
    //  this.subs.add(
    //    this.roleService.getAllRoles().subscribe(data => {  
    //      this.rolesData = data; 
    //    }),
    //    this.roleService.getAllRoles().subscribe(data => {  
    //      this.rolesData = data; 
    //    })
    //  )

  }

  //Post isteğinden sonra geri dönen data tüm liste ise tekrar Get atmak zorun kalınmaz ama doğru yaklaşımda
  //Post isteğinden sonra sadece create edilan data bilgileri geri döner. Bundan dolayı Get isteği atılması zorunludur.
  addNewRole(roleForm: NgForm) {
    this.subs2 = this.roleService.addRole(roleForm.value).subscribe(data => {
      this.getRoles();//datanın gelip gelmediği kontrol edilerek getroles tekrar tekrar tetiklenerek liste çalışsın ki eklendiğini kontrol edelim.
    },
      error => {
        alert("something went wrong add!");
      });

    this.subs1.add(this.subs2); //Subscription, iki subscription birbirine bağlandı , veya
    //2.yöntem
    //this.subs1.add(
    //  this.roleService.addRole(roleForm.value).subscribe(data => {
    //  this.getRoles();//datanın gelip gelmediği kontrol edilerek getroles tekrar tekrar tetiklenerek liste çalışsın ki eklendiğini kontrol edelim.
    //},
    //  error => {
    //    alert("something went wrong add!");
    //  }));


    //SubSink
    // this.subs.add( this.roleService.addRole(roleForm.value).subscribe(data => {
    //   this.getRoles();//datanın gelip gelmediği kontrol edilerek getroles tekrar tekrar tetiklenerek liste çalışsın ki eklendiğini kontrol edelim.
    //},
    //  error => {
    //    alert("something went wrong add!");
    //  }))
  }

  //update
  editRole(roleForm: NgForm) {
    this.roleService.editRole(roleForm.value).subscribe(data => {
      this.getRoles(); //bunu yapmak yerine servise bir subject tanımlayıp gelen değeri subscribe olup anında o subject e next edilir, o subject te componenti sürekli dinler datanın sürekli değişip değişmediği anlık olarak kontrol edilebilir.
    },
      error => {
        alert("something went wrong update!");
      });
  }

  //delete
  deleteRole(roleForm: NgForm) {
    this.roleService.deleteRole(roleForm.value).subscribe(data => {
      this.getRoles();
    },
      error => {
        alert("someting went wrong delete");
      })
  }


}

//Bir observable data ya subscribe olup datalar ve error lar handle edildi component çalıştığı zaman get metodu atıyor
//dönen observable datalara sürekli subscribe olup data ve errorlar handle ediliyor, fakat angular her component oluştuğu zamam
//bunların instance ını oluştuyor bu işlemleri yapıyor ve componentin işlemi bittiğinde içerisindeki instance ları kaybediyor
//fakat bu subcribe (abonelikler) devam ediyor ve sürekli gir çık yapıldığında componente sürekli subcribe ların sayısı artıyor
//bu nedenle memory leak'lere yer açıyor abonelikler artıyor kurtulmak için 1)Subcription, 2)Subsink
//1)Subcribe: Abone olduğum bir yapıdan çıkabilirim 
//2)Subsink: Hepsine array olarak aynı anda eklenmek için kullanılır.
//İkisininde amacı aboneliklerden kurtulmak
//Rxjs de bir özelliğide takeUntil operatörü: yapılacak olarak subscribe(aboneliğe) bir değer gelene kadar ya da bir değere
// bitene kadar, ya da bir metot dönene kadar abone oluyor, orda da aynı işlemler gerçekleşiyor
