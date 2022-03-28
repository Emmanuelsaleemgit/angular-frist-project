import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UseRoutingModule } from './use-routing.module';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    ListComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    UseRoutingModule
  ]
})
export class UseModule { }
