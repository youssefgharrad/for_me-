import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {UniversiteComponent} from "../back-office/universite/universite.component";
import {BlocComponent} from "../back-office/bloc/bloc.component";
import {FoyerComponent} from "../back-office/foyer/foyer.component";
import {DialogComponent} from "../back-office/foyer/dialog/dialog.component";
import {DialogbComponent} from "../back-office/bloc/dialogb/dialogb.component";
import {ListblocdialogComponent} from "../back-office/foyer/listblocdialog/listblocdialog.component";
import {UniversitedialogComponent} from "../back-office/universite/universitedialog/universitedialog.component";
import {
  UniversiteupdadialogComponent
} from "../back-office/universite/universiteupdadialog/universiteupdadialog.component";
import {ChambreComponent} from "../back-office/chambre/chambre.component";
import {ChambreFromDialogComponent} from "../back-office/chambre/chambre-from-dialog/chambre-from-dialog.component";
import {
  ChambreFromUpdaDialogComponent
} from "../back-office/chambre/chambre-from-upda-dialog/chambre-from-upda-dialog.component";
import {ReservationComponent} from "../back-office/reservation/reservation.component";
import {ReservationdialogComponent} from "../back-office/reservation/reservationdialog/reservationdialog.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {FrontComponent} from "../frontfront/front.component";



@NgModule({
  declarations: [
    FrontComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [


  ],
})
export class FrontOfficeModule { }
