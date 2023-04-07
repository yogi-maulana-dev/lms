import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path:'admin',
  loadChildren:()=>import('./administrator/administrator.module').then(mod=>mod.AdministratorModule)
}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
