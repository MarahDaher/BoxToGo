import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppNgZorroAntdModule } from '../app-ng-zorro-antd.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppNgZorroAntdModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    AppNgZorroAntdModule,
  ]
})
export class SharedModule { }
