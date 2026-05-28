import { Routes } from '@angular/router';
import { Blankpage } from './layout/blankpage/blankpage';
import { Fullpage } from './layout/fullpage/fullpage';

export const routes: Routes = [
     {
    path:'',
    children:[
      {
        path:'', redirectTo:'auth', pathMatch:'full'
      },
      {
        path:'auth',
        component:Blankpage,
        loadChildren: () => import('./modules/auth/auth-module').then(m=>m.AuthModule)
      },
      {
        path:'dashboard',
        component:Fullpage,
        loadChildren: ()=> import('./modules/dashboard/dashboard-module').then(m=>m.DashboardModule)
      },
      {
        path:'product',
        component:Fullpage,
        loadChildren: ()=> import('./modules/product/product-module').then(m =>m.ProductModule)
      }
    ]
  }
];


