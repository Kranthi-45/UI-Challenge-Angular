import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  menudata: any= [
    {
    type: "link",
    title: "This Month",
  },
  {
    type: "link",
    title: "SKIN",
  },
  {
    type: "link",
    title: "HAIR",
  },
  {
    type: "link",
    title: "BATH",
  },
  {
    type: "link",
    title: "SALE",
  },
  {
    type: "button",
    title: "LOGIN >",
  }
  ] 
  constructor() { }

  ngOnInit(): void {
  }

}
