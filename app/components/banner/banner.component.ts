import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';
import { Carousel, CarouselItem } from 'nativescript-carousel';

registerElement('Carousel', () => Carousel);
registerElement('CarouselItem', () => CarouselItem);

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  options: {
    class?: ' string'
  }

  @Input('options')
  set setOptions(options) {
    this.options = options;
    this.options.class = options.class || '';
  }

  banners = [
    {
      color: '#ccc',
      title: 'banner 1',
      src: '~/assets/images/banner1.png'
    },
    {
      color: '#ccc',
      title: 'banner 1',
      src: '~/assets/images/banner1.png'
    },
    {
      color: '#ccc',
      title: 'banner 1',
      src: '~/assets/images/banner1.png'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  myTapPageEvent(args) {
    // console.log('Tapped page index: ' + (this.carouselView.nativeElement.selectedPage));
  }

  myChangePageEvent(args) {
    // console.log('Page changed to index: ' + args.index);
  };

}
