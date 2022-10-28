import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  constructor() { }

  showCaseData: any= [
    {
    type: "showcase1",
    title: "Setup your profile & preferences",
    content: "Once you create an account, you can start to tell us your likes and dislikes so we can tailor the experience just for you.",
    image : "../../assets/work1.png"
  },
  {
    type: "showcase2",
    title: "Review your custom box",
    content: "Once we get to know you, we will show you the box we’ve crafted. This is your chance to approve it before we ship it to your house.",
    image : "../../assets/work2.png",
    showdowImage : "../../assets/work2-art.png"
  },
  {
    type: "showcase1",
    title: "Try it on at home",
    content: "Your box will arrive within 3-5 days (usually sooner) and you get the joy to unbox your Upbox. Try it all on and send back whatever you're not in love with.",
    image : "../../assets/work3.png"
  }
  ] 
  ngOnInit(): void {
    // console.log(this.showCaseData);
  }

}
