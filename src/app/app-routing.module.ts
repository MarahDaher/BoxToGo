import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './shared/component/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule),
      },
      {
        path: 'about-us',
        loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule),
      },
      {
        path: 'contact-us',
        loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule),
      },
      {
        path: 'help',
        loadChildren: () => import('./help/help.module').then(m => m.HelpModule),
      },
      {
        path: 'blog',
        loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule),
      },
    ]
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
