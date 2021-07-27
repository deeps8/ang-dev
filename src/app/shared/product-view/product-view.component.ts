import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  products=[
    "assets/products/2.jpeg",
    "assets/products/5.jpeg",
    "assets/products/6.jpeg",
    "assets/products/7.jpeg",
    "assets/products/8.jpeg",
    "assets/products/9.jpeg",
    "assets/products/10.jpeg",
    "assets/products/11.jpeg",
    "assets/products/7.jpeg",
    "assets/products/8.jpeg",
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
