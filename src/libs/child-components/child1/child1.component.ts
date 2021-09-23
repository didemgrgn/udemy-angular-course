import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {
  //Child componentten verinin aktarımı için @Input
 //@Input() nameVal: string | undefined;//componentin bir input alacağı belirtiliyor, kesinlikle bir value olacak gelmezse bir şey göstermeyecek bu da string olacak
 //@Input('name') name: string | undefined;  yazımında ('name') : parent ta nasıl vereceğimize, name: bu componentin(child) içerisinde ne olarak göstereceğimizi belirtir
 
 @Input() data: any ;


//Child componentten parent componente bilgi aktarımı sağlanacak @Output
 @Output() resetForm: EventEmitter<any> = new EventEmitter() ; //EventEmitter<name,id,vb.> şeklinde de tipler belirtilebilir ;
//Output tetiklendiği zaman parent1 componenti haberdar olsun
//EventEmitter sınıfı sayesinde özel olaylar tanımlayarak, tanımladığınız bu olayları istediğiniz zaman tetikleyebilirsiniz.




 constructor() { }

  ngOnInit(): void {}

  emitForm(event: any){
    this.resetForm.emit(event); //click gibi çalışabilmesi için event Emit edilecek
  }

  alertSth(){
    alert("You have reached the child component(Child Component'i tetiklediniz.");
    console.log("You have reached the child component(Child Component'i tetiklediniz.");
    this.data={ //istenilen şekilde input ta yönlendirilebiliyor, bu componentin içerisinde ne varsa dataları parent componentten manufule edilebilir
      name:"triggered !!", 
      status:false
    }
  }

}
