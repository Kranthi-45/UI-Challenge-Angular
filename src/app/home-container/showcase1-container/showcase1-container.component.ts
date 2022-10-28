import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase1-container',
  templateUrl: './showcase1-container.component.html',
  styleUrls: ['./showcase1-container.component.css']
})
export class Showcase1ContainerComponent implements OnInit {

  @Input() showcase1 : '' | any
  @Input() index : '' | any
  constructor() { }

  ngOnInit(): void {
    console.log("children "+ JSON.stringify(this.showcase1))
  }

}
