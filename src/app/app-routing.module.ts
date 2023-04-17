import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalPageComponent } from './modules/principal-page/principal-page.component';

const routes: Routes = [
  {
    path: 'principal-page',
    component: PrincipalPageComponent
  },
  {
    path: '**',
    redirectTo: 'principal-page'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
