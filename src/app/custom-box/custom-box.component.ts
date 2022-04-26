import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../shared/component/base.component';

@Component({
  selector: 'app-custom-box',
  templateUrl: './custom-box.component.html',
  styleUrls: ['./custom-box.component.scss']
})
export class CustomBoxComponent extends BaseComponent implements OnInit {

  orderRewiemList = [
    {
      img : 'assets/custom-box/item.png',
      title : 'Indomie (Chicken Flavour)' , 
      price : 3.33
    },
    {
      img : 'assets/custom-box/item.png',
      title : 'Indomie (Chicken Flavour)' , 
      price : 3.33
    },
    {
      img : 'assets/custom-box/item.png',
      title : 'Indomie (Chicken Flavour)' , 
      price : 3.33
    },
    {
      img : 'assets/custom-box/item.png',
      title : 'Indomie (Chicken Flavour)' , 
      price : 3.33
    }
  ];
  constructor(
    injector : Injector
  ) { 
    super(injector);
  }

  ngOnInit(): void {
  }

}
