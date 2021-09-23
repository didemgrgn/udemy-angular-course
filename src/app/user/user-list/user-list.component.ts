import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/libs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userData: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.getAllUsers();

  }

  getAllUsers() {

    this.userService.getAllUsers().subscribe(data => {
      this.userData = data
    }, error => {
      alert(`${error.error.exception.message}`); //Jwt could not found! hatası veriyor web servisi bulamadığı için  userservice de isteği atarken header belirlenip getAllUsers e eklenerek bu  istek karşılanabilir ancak clean code olmayacağından interceptor oluşturulacak
      console.log("error", error);
    });
  }

}
