import { Component, OnInit, Output } from '@angular/core';
import { UserService } from 'src/libs';
import { Input,EventEmitter } from '@angular/core';


@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
 
  @Input()  lang: any;
  @Output() langChange: EventEmitter<any> = new EventEmitter();
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  toggleLogin(){
  this.userService.login(); //logini toggle lamaya yarar.
  }

}
