import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class AppCarouselComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  imgStore:Array<any>=[
    {
      src:"http://167.71.233.6/banner-images/20210609115256.jpg",
      alt:"png",
      id:1,
    },{
      src:"http://167.71.233.6/banner-images/20210620115702.jpg",
      alt:"png",
      id:2,
    },{
      src:"http://167.71.233.6/banner-images/20210619120056.jpg",
      alt:"png",
      id:3,
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
