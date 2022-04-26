import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomBoxComponent } from './custom-box.component';

const routes: Routes = [
  {
    path: '',
    component : CustomBoxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomBoxRoutingModule { }
