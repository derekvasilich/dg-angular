import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() images: any[] = [];
  @Input() showControls: boolean = true;
  @Input() showIndicators: boolean = true;

  constructor() { }

  ngOnInit(): void { }

}
