import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { AppNgZorroAntdModule } from '../app-ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChooseCountryComponent } from './choose-country/choose-country.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ChooseCountryComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AccountRoutingModule,
    AppNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }
