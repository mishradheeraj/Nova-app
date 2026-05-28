import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Forget } from './forget/forget';

const routes: Routes = [
    {
    path:'',
    component:Login
  },
  {
    path:'create',
    component:Signup
  },
  {
    path:'forget',
    component:Forget
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
