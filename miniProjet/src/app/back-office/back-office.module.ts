import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackComponent } from './back/back.component';
import { BackOfficeRoutingModule } from './back-office-routing.module';
import { UniversiteComponent } from './universite/universite.component';
import { HttpClientModule } from '@angular/common/http';
import { FoyerComponent } from './foyer/foyer.component';
import { BlocComponent } from './bloc/bloc.component';
import { DialogComponent } from './foyer/dialog/dialog.component';
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import { DialogbComponent } from './bloc/dialogb/dialogb.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import { ListblocdialogComponent } from './foyer/listblocdialog/listblocdialog.component';
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {CapaciteDirective} from "./foyer/capacite.directive";
import {NotificationService} from "./foyer/notification.service";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {UniversitedialogComponent} from "./universite/universitedialog/universitedialog.component";
import {UniversiteupdadialogComponent} from "./universite/universiteupdadialog/universiteupdadialog.component";
import {ChambreComponent} from "./chambre/chambre.component";
import {ChambreFromDialogComponent} from "./chambre/chambre-from-dialog/chambre-from-dialog.component";
import {ChambreFromUpdaDialogComponent} from "./chambre/chambre-from-upda-dialog/chambre-from-upda-dialog.component";
import {ReservationComponent} from "./reservation/reservation.component";
import {ReservationdialogComponent} from "./reservation/reservationdialog/reservationdialog.component";
import { EtudiantupdatedialogComponent } from './etudiant/etudiantupdatedialog/etudiantupdatedialog.component';
import { EtudiantdialogComponent } from './etudiant/etudiantdialog/etudiantdialog.component';
import { EtudiantComponent } from './etudiant/etudiant.component';





@NgModule({
  declarations: [
    BackComponent,
    UniversiteComponent,
    FoyerComponent,
    BlocComponent,
    DialogComponent,
    DialogbComponent,
    ListblocdialogComponent,
    UniversitedialogComponent,
    CapaciteDirective,
    UniversiteupdadialogComponent,
    ChambreComponent,
    ChambreFromDialogComponent,
    ChambreFromUpdaDialogComponent,
    ReservationComponent,
    ReservationdialogComponent,
    EtudiantdialogComponent,
    EtudiantupdatedialogComponent




  ],
  entryComponents: [
  DialogComponent,
    DialogbComponent,
    ListblocdialogComponent,
    UniversitedialogComponent,
    UniversiteupdadialogComponent,
    ChambreFromDialogComponent,
    ChambreFromUpdaDialogComponent,
    ReservationdialogComponent,
    EtudiantdialogComponent,
    EtudiantupdatedialogComponent



  ],
  imports: [
    CommonModule,
    BackOfficeRoutingModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
    MatOptionModule,
    MatSelectModule,
    MatListModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    EtudiantComponent,

  ],
  exports: [
    UniversiteComponent,
    BlocComponent,
    FoyerComponent,
    DialogComponent,
    DialogbComponent,
    ListblocdialogComponent,
    UniversitedialogComponent,
    UniversiteupdadialogComponent,
    ChambreComponent,
    ChambreFromDialogComponent,
    ChambreFromUpdaDialogComponent,
    ReservationComponent,
    ReservationdialogComponent,
    EtudiantComponent,
    EtudiantdialogComponent,
    EtudiantupdatedialogComponent

  ],
})
export class BackOfficeModule { }
