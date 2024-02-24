import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogbComponent} from "./back-office/bloc/dialogb/dialogb.component";
import {BackOfficeModule} from "./back-office/back-office.module";
import {RouterModule} from "@angular/router";
import {LoginComponentt} from "./login/login.component";
import {RegisterComponentt} from "./register/register.component";
import {HomeComponent} from "./home/home.component";
import {ProfileComponentt} from "./profile/profile.component";
import {BoardAdminComponent} from "./board-admin/board-admin.component";
import {BoardModeratorComponent} from "./board-moderator/board-moderator.component";
import {BoardUserComponent} from "./board-user/board-user.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentt,
    RegisterComponentt,
    HomeComponent,
    ProfileComponentt,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
