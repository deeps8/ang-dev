import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductViewComponent } from './product-view/product-view.component';
import { AppCarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
// import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductViewComponent,
    AppCarouselComponent
  ],
  imports: [
    CommonModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  exports:[AppCarouselComponent,ProductViewComponent]
})
export class SharedModule { }
