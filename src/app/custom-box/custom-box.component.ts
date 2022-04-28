import { Component, Injector, OnInit, ViewContainerRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { BaseComponent } from '../shared/component/base.component';
import { AddNewAddressComponent } from './add-new-address/add-new-address.component';

@Component({
  selector: 'app-custom-box',
  templateUrl: './custom-box.component.html',
  styleUrls: ['./custom-box.component.scss']
})
export class CustomBoxComponent extends BaseComponent implements OnInit {

  orderRewiemList = [
    {
      img: 'assets/custom-box/item.png',
      title: 'Indomie (Chicken Flavour)',
      price: 3.33
    },
    {
      img: 'assets/custom-box/item.png',
      title: 'Indomie (Chicken Flavour)',
      price: 3.33
    },
    {
      img: 'assets/custom-box/item.png',
      title: 'Indomie (Chicken Flavour)',
      price: 3.33
    },
    {
      img: 'assets/custom-box/item.png',
      title: 'Indomie (Chicken Flavour)',
      price: 3.33
    }
  ];

  currentStep = 0;
  newAddressValue: any;
  showContent = false;
  radioValue: any;

  constructor(
    injector: Injector,
    private viewContainerRef: ViewContainerRef,
    public modal: NzModalService

  ) {
    super(injector);
  }

  ngOnInit(): void {
  }

  ShowOrderContent() {
    this.showContent = !this.showContent;
  }


  addNewAddress() {
    const modal = this.modal.create({
      nzTitle: '',
      nzContent: AddNewAddressComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzCloseIcon: undefined,
      nzWidth : '710px',
      nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000)),
    });

    modal.afterClose.subscribe(result => {
    });
  }

}
