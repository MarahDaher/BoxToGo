import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../shared/component/base.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent extends BaseComponent implements OnInit {

  categoriesList = [
    { name: 'All' , active : true},    
    { name: 'Legumes and mortar'},
    { name: 'Arabic sweets'},
    { name: 'Vegetable and animal ghee oils'},
    { name: 'Canned food'},
    { name: 'Zuriah'},
    { name: 'Legumes'},
  ];
  radioValue = '1';

  bestSellerList = [
    {
      img: 'assets/shop/best-seller/Nesquik.png',
      name:'Nesquik',
      price :'$3.33',
      prevPrice :'4.00$'
    },
    {
      img: 'assets/shop/best-seller/Indomie.png',
      name:'Indomie (Chicken Flavour)',
      price :'$3.33',
      prevPrice :''
    },
    {
      img: 'assets/shop/best-seller/Poppins.png',
      name:'Poppins (Honey Flakes)',
      price :'$3.33',
      prevPrice :''
    },
    {
      img: 'assets/shop/best-seller/Alburj.png',
      name:'Alburj 400g‏',
      price :'$3.33',
      prevPrice :''
    },
    {
      img: 'assets/shop/best-seller/Digestives.png',
      name:'Digestives',
      price :'$3.33',
      prevPrice :''
    }
  ];

  cookiesList = [
    {
      img: 'assets/shop/cookies/Nesquik.png',
      name:'Nesquik',
      price :'$3.33',
      prevPrice :'4.00$'
    },
    {
      img: 'assets/shop/cookies/Indomie.png',
      name:'Indomie (Chicken Flavour)',
      price :'$3.33',
      prevPrice :'4.00$'
    },
    {
      img: 'assets/shop/cookies/Poppins.png',
      name:'Poppins (Honey Flakes)',
      price :'$3.33',
      prevPrice :'4.00$'
    },
    {
      img: 'assets/shop/cookies/Alburj.png',
      name:'Alburj 400g‏',
      price :'$3.33',
      prevPrice :'4.00$'
    },
    {
      img: 'assets/shop/cookies/Digestives.png',
      name:'Digestives',
      price :'$3.33',
      prevPrice :'4.00$'
    }
  ];

  subTotalList= [
    {
      img: 'assets/shop/best-seller/Indomie.png',
      name:'Indomie (Chicken Flavour)',
      price :'$3.33',
      count : '5',
      prevPrice :''
    },    {
      img: 'assets/shop/best-seller/Indomie.png',
      name:'Indomie (Chicken Flavour)',
      price :'$3.33',
      count : '5',
      prevPrice :''
    }
  ];

  hideAddBtn = false;
  constructor(
    injector: Injector
  ) { 
    super(injector);
  }

  ngOnInit(): void {
  }

  addToCard(){
    this.hideAddBtn = true;
  }

}
