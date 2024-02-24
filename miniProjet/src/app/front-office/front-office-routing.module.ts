// front-office-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {FrontComponent} from "../frontfront/front.component";

const routes: Routes = [
  {
    path: '',
    component: FrontComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontOfficeRoutingModule {}
