import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ContactUsComponent } from './contact-us.component';



@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    SharedModule
  ],
  exports: [
    ContactUsComponent
  ]
})
export class ContactUsModule { }
