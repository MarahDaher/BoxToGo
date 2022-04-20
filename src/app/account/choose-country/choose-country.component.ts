import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/component/base.component';

@Component({
  selector: 'app-choose-country',
  templateUrl: './choose-country.component.html',
  styleUrls: ['./choose-country.component.scss']
})
export class ChooseCountryComponent extends BaseComponent implements OnInit {

  constructor(
    injector: Injector
  ) {
    super(injector);
   }

  ngOnInit(): void {
  }

}
