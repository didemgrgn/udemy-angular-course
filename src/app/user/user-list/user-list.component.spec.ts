import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { exec } from 'child_process';

import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => { //componenti tanımlıyor
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListComponent ], //declare ediyor
      imports:[HttpClientModule]//http call componentte yapıldığı için buraya da çağırılması gerekiyor
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { //component oluşmalı diyor
    expect(component).toBeTruthy();
  });

  //Kullanıcı senaryosu yazıyoruz
  //testin çalışması için alana package.json dan bakılır
  //Sadece bu spec dosyasının çalışması için => npm run test -- --include src/app/user/user-list/user-list.component.spec.ts

  it('should render title in a h1 tag',()=>{
    const compiled = fixture.debugElement.nativeElement;//user-list.component.html e erişildi
    //toContain: içeriğinde yazması gereken, querySelector: h1 tagi bekleniyor
    expect(compiled.querySelector("h1").textContent).toContain("Kullanıcı Listesi");
  });

  it('should rendeer title in a h3 tag for empty list',()=>{
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h3").textContent).toContain("Kullanıcı Listesi Boş");
  });

  //Rastgele kullanıcı ekle butonuna tıkladığım zaman user-list-item classına ait olan li tag inin sayısının artması için kontrol
  //class olarak çekicez

  it("should increase user list items",()=>{
    //rastgele kullanıcı ekle buttonının çekmemiz gerekiyor, html deki
    //query de butonun class ı olan add-button a erişmemiz lazım
    //css("#add-button") id ise # , class ise . şekilde çağırılır
    const button=fixture.debugElement.query(By.css(".add-button")); //add-button tag li native elemente erişebiliyoruz
    //buton triggerlanarak click event i çağırılacak
    button.triggerEventHandler("click",null);
    fixture.detectChanges(); //componentin bu işlemi(tıklandığını) algılaması için

    //user-list-item ın tanımlanması gerekiyor
    //queryAll : herşeyden çeksin anlamına gelir
      const listItem=fixture.debugElement.queryAll(By.css(".user-list-item")); //bunu bekliyoruz

    //ilk oluşturduğumuzda 0 dı butona basınca 1 olması bekleniyor
    expect(listItem.length).toEqual(1); //Butona tıkladığımda 1 tane oluştursun 
  });

  it("should increase user list items for 3 times",()=>{
    const button=fixture.debugElement.query(By.css(".add-button"));

    for (let kp = 0; kp < 3; kp++) {
      //butona 3 kere tıklasın
      button.triggerEventHandler("click",null);
    }
    fixture.detectChanges();

    const listItem=fixture.debugElement.queryAll(By.css(".user-list-item"));

    expect(listItem.length).toEqual(3); //3 kere tıklanırsa 3 olarak gelmesi bekleniyor
  })
});
