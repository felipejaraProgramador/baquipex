import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalPageRoutingModule } from './principal-page-routing.module';
import { PrincipalPageComponent } from './principal-page.component';


@NgModule({
  declarations: [
    PrincipalPageComponent
  ],
  imports: [
    CommonModule,
    PrincipalPageRoutingModule
  ]
})
export class PrincipalPageModule { }
