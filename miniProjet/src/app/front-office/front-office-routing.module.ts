import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackComponent } from '../back-office/back/back.component';
import { FrontComponent } from './front/front.component';
import { DetailsComponent } from '../frontOffice/details/details.component';
import { ListComponent } from '../list/list.component';

const routes: Routes = [
  {path:"",component: FrontComponent, children:[
    {path:"list", component:ListComponent,children: [
            { path: 'details/:id', component: DetailsComponent },
    ]}
   
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontOfficeRoutingModule { }
