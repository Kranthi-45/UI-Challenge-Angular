import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase2-container',
  templateUrl: './showcase2-container.component.html',
  styleUrls: ['./showcase2-container.component.css']
})
export class Showcase2ContainerComponent implements OnInit {

  @Input() showcase2 : '' | any;
  @Input() index : '' | any

  constructor() { }

  ngOnInit(): void {
    console.log("children "+ JSON.stringify(this.showcase2))
  }


}
