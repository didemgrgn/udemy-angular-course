import { Component, Input, OnInit } from '@angular/core';
import { IgxButtonModule } from 'igniteui-angular';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text:string ="default"; //Bir string göndermezse default yazsın

  constructor() { }

  ngOnInit(): void {
  }

}
