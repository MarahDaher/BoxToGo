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
  },
  {
    img : 'assets/product/11.png'
  }
];

  selectedProduct :any ;

  constructor(
    injector: Injector
  ) { 
    super(injector);
  }

  ngOnInit(): void {
    this.selectedProduct = this.productList[0];
  }

}
