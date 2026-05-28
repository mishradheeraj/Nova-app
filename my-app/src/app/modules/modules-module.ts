import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing-module';
import { AuthModule } from './auth/auth-module';
import { DashboardModule } from './dashboard/dashboard-module';
import { ProductModule } from './product/product-module';


@NgModule({
  declarations: [],
  imports: [AuthModule,DashboardModule,ProductModule,CommonModule, ModulesRoutingModule],
})
export class ModulesModule {}
