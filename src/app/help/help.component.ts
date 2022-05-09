import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../shared/component/base.component';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent extends BaseComponent implements OnInit {

  hiddenBtn : boolean = false;
  constructor(
    injector: Injector
  ) { 
    super(injector);
  }

  ngOnInit(): void {
  }

  changeBtn(){
    this.hiddenBtn = !this.hiddenBtn;
  }
}
