import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  routeLinks=[
    {
       routerLink: "home",
       name:"Home"
    },
    {
      routerLink: "role",
      name:"Role"
   },
   {
    routerLink: "user",
    name:"User"
   },
   {
  routerLink: "data-binding",
  name:"Data Binding"
   },
   {
  routerLink: "storage",
  name:"Storage"
   },
   {
  routerLink: "directives",
  name:"Directives"
   },
   {
    routerLink: "pipes",
    name:"Pipes"
   },
   {
      routerLink: "parents",
      name:"Parents"
   },
   {
    routerLink: "forms",
    name:"Forms"
 },
   {
  routerLink: "map",
  name:"Map"
   },
   {
    routerLink: "file-upload",
    name:"File-Upload"
     }
  ]


  ngOnInit(): void {
  }

}
