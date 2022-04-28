import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/component/base.component';

@Component({
  selector: 'app-add-new-address',
  templateUrl: './add-new-address.component.html',
  styleUrls: ['./add-new-address.component.scss']
})
export class AddNewAddressComponent extends BaseComponent implements OnInit {
  checked = true;

  constructor(
    injector : Injector,

  ) {
    super(injector);
   }

  ngOnInit(): void {
  }



}
