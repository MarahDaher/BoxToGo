import { Component, Injector, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BaseComponent } from '../shared/component/base.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent extends BaseComponent implements OnInit {
  radioValue = '1';

  shopingList = [
    {
      offer: true,
      share: true,
      img: "assets/home/shoping/shoping-bg.png",
      title: "Medium sized food box ",
      description: "any pallet-sized box for bulk shipping of storage. The term Gaylord .....",
      price: "1700",
      prevPrice: "1400",

    },
    {
      offer: false,
      share: true,
      img: "assets/home/shoping/shoping-bg.png",
      title: "Economical large food box",
      description: "any pallet-sized box for bulk shipping of storage. The term Gaylord .....",
      price: "1700",
      prevPrice: "1400",
    },
    {
      offer: false, 
      share: false,
      img: "assets/home/shoping/shoping-bg.png",
      title: "Food box you make yourself",
      description: "any pallet-sized box for bulk shipping of storage. The term Gaylord .....",
      price: "1700",
      prevPrice: "1400",
    },
  ];

  feedbacksList = [
    {
      id: '0',
      active: true,
      img: "assets/home/client-feedback/profile.png",
      name: "Njeeb Shbib",
      rate: 4 ,
      desc: "I never found app like this. It keeps me motivated to reach my goal. I have some new friends who have similar passion like me. I feel like I starting new life."
    },
    {
      id: '1',
      active: false,
      img: "assets/home/client-feedback/profile.png",
      name: "Majd Shbib",
      rate: 4 ,
      desc: "I never found app like this. It keeps me motivated to reach my goal. I have some new friends who have similar passion like me. I feel like I starting new life."
    },
    {
      id: '2',
      active: false,
      img: "assets/home/client-feedback/profile.png",
      name: "Majd Shbib",
      rate: 4 ,
      desc: "I never found app like this. It keeps me motivated to reach my goal. I have some new friends who have similar passion like me. I feel like I starting new life."
    },
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay: true,
    center: true,
    autoplayTimeout:10000,
    autoplayHoverPause:false,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 2
      }
    },
    nav: false
  };
  
  articlesList = [
    {
      img: 'assets/home/articles/box3.png',
      title: 'What is Box To Go?',
      desc: 'Once all menu has been uploaded, click the navigation into QR Code to generate the QR Code of your design for your restaurant. Print and display on your menu table. '
    },
    {
      img: 'assets/home/articles/box1.png',
      title: 'Available Now in Lebanon ',
      desc: 'Once all menu has been uploaded, click the navigation into QR Code to generate the QR Code of your design for your restaurant. Print and display on your menu table. '
    },
    {
      img: 'assets/home/articles/box2.png',
      title: 'You can create your own Box ?',
      desc: 'Once all menu has been uploaded, click the navigation into QR Code to generate the QR Code of your design for your restaurant. Print and display on your menu table. '
    },
    {
      img: 'assets/home/articles/box3.png',
      title: 'You can create your own Box ?',
      desc: 'Once all menu has been uploaded, click the navigation into QR Code to generate the QR Code of your design for your restaurant. Print and display on your menu table. '
    },
    {
      img: 'assets/home/articles/box3.png',
      title: 'You can create your own Box ?',
      desc: 'Once all menu has been uploaded, click the navigation into QR Code to generate the QR Code of your design for your restaurant. Print and display on your menu table. '
    },
  ];

  articlesListSm = [
    {
      img: 'assets/home/articles/box3.png',
      title: 'What is Box To Go?',
      desc: 'Once all menu has been uploaded, click the navigation into QR Code to generate the QR ....'
    },
    {
      img: 'assets/home/articles/box1.png',
      title: 'Available Now in Lebanon ',
      desc: 'Once all menu has been uploaded, click the navigation into QR Code to generate the QR ....'
    },
    {
      img: 'assets/home/articles/box2.png',
      title: 'You can create your own Box ?',
      desc: 'Once all menu has been uploaded, click the navigation into QR Code to generate the QR ....'
    },
    {
      img: 'assets/home/articles/box3.png',
      title: 'You can create your own Box ?',
      desc: 'Once all menu has been uploaded, click the navigation into QR Code to generate the QR ....'
    },
    {
      img: 'assets/home/articles/box3.png',
      title: 'You can create your own Box ?',
      desc: 'Once all menu has been uploaded, click the navigation into QR Code to generate the QR ....'
    },
  ];

  headerBoxes=[
    {
      img: "assets/home/box2.png",
    },
    {
      img: "assets/home/box1.png"
    },
    {
      img: "assets/home/box3.png"
    }
]

  constructor(
    injector: Injector
  ) {
    super(injector);
  }

  ngOnInit(): void {
  }

}
