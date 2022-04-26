import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomBoxRoutingModule } from './custom-box-routing.module';
import { CustomBoxComponent } from './custom-box.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CustomBoxComponent
  ],
  imports: [
    CommonModule,
    CustomBoxRoutingModule,
    SharedModule
  ]
})
export class CustomBoxModule { }
