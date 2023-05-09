import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Input() images: any[] = [];
  @Input() showControls: boolean = true;
  @Input() showIndicators: boolean = true;

  constructor() { }

}
