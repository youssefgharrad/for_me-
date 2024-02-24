import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontComponent } from './front-office/front/front.component';
import { BackComponent } from './back-office/back/back.component';
import { makeBindingParser } from '@angular/compiler';

const routes: Routes = [
 // {path: 'front', loadChildren: () => import('./front-office/front-office.module').then(m => m.FrontOfficeModule)},
 {path:'front', loadChildren: () => import('./front-office/front-office.module').then(m => m.FrontOfficeModule)},
 { path: '', redirectTo: '/front', pathMatch: 'full' }, // Default route
  
  {path:'back', loadChildren: () => import('./back-office/back-office.module').then(m => m.BackOfficeModule)},
  { path: '', redirectTo: '/front', pathMatch: 'full' }, // Default route
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
