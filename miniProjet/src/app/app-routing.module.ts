import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BoardUserComponent} from "./board-user/board-user.component";
import {BoardModeratorComponent} from "./board-moderator/board-moderator.component";
import {BoardAdminComponent} from "./board-admin/board-admin.component";
import { LoginComponentt } from './login/login.component';
import {RegisterComponentt} from "./register/register.component";
import {ProfileComponentt} from "./profile/profile.component";
import {FrontComponent} from "./frontfront/front.component";

const routes: Routes = [
  { path: 'home', component: FrontComponent },
  { path: 'login', component: LoginComponentt },
  { path: 'register', component: RegisterComponentt },
  { path: 'profile', component: ProfileComponentt },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  //{ path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Charger le module du front-office de manière asynchrone
  {path:'front', loadChildren: () => import('./front-office/front-office.module').then(m => m.FrontOfficeModule)},
  { path: '', redirectTo: '/front', pathMatch: 'full' },

  { path: 'back', loadChildren: () => import('./back-office/back-office.module').then(m => m.BackOfficeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
