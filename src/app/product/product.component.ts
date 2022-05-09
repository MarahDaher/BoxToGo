import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../shared/component/base.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent extends BaseComponent implements OnInit {

  productList = [
    {
      id: 1,
      img : 'assets/product/1.png',
      title : 'Pois chiches Madanli 900g - حمص معدنلي',
      rate : '4.8',
      price : '2,40 $',
      prevPrice : '4 $',
      content : '1 KG Read more',
      brand : 'Brand: Kitaaz',
      category : 'Categories: Syria Shops / Custom BoxToGo Syria / Olives , Olive Oil & Ghee Syria',
      tag : 'Tags:',
      sku : 'SKU: #709',
      quantity:'2'
    }
  ];
  minProduct = [ 
    {
    img : 'assets/product/22.png'
  },
  {
    img : 'assets/product/11.png'
  },
  {
    img : 'assets/product/11.png'
  },
  {
    img : 'assets/product/11.png'
  },
  {
    img : 'assets/product/11.png'
  }
  ];

  reviewList = [
    {id : 5 , rate : 80},
    {id : 4 , rate : 7},
    {id : 3 , rate : 5},
    {id : 2 , rate : 1},
    {id : 1 , rate : 7},
  ];

  bestSellerList = [
    {
      img: 'assets/product/semolina.png',
      name:'Semolina',
      price :'$3.33',
      prevPrice :''
    },
    {
      img: 'assets/product/wheat.png',
      name:'Wheat',
      price :'$3.33',
      prevPrice :''
    },
    {
      img: 'assets/product/Bean.png',
      name:'Bean',
      price :'$3.33',
      prevPrice :''
    },
    {
      img: 'assets/product/Freekeh.png',
      name:'Freekeh',
      price :'$3.33',
      prevPrice :''
    },
    {
      img: 'assets/product/lentil.png',
      name:'Lentil',
      price :'$3.33',
      prevPrice :''
    },
    {
      img: 'assets/product/rice.png',
      name:'Rice',
      price :'$3.33',
      prevPrice :''
    }
  ];

  selectedProduct :any ;
  radioValue = '1';
  hideAddBtn = false;

  constructor(
    injector: Injector
  ) { 
    super(injector);
  }

  ngOnInit(): void {
    this.selectedProduct = this.productList[0];
  }
  addToCard(){
    this.hideAddBtn = true;
  }


}
