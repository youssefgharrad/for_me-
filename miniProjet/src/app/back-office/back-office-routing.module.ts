import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackComponent } from './back/back.component';
import { UniversiteComponent } from './universite/universite.component';
import {FoyerComponent} from "./foyer/foyer.component";
import {BlocComponent} from "./bloc/bloc.component";
import {ChambreComponent} from "./chambre/chambre.component";
import {ReservationComponent} from "./reservation/reservation.component";



const routes: Routes = [

    {path:"",component: BackComponent, children:[
      {path:"universite", component:UniversiteComponent},
        {path:"foyer", component:FoyerComponent},
          {path:"bloc", component:BlocComponent},
            {path:"chambre", component:ChambreComponent},
              {path:"reservation", component:ReservationComponent},

      ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
