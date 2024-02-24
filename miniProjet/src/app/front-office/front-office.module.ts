import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontComponent } from './front/front.component';
import { FrontOfficeRoutingModule } from './front-office-routing.module';
import { DetailsComponent } from '../frontOffice/details/details.component';
import { FormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ReservationComponent } from '../frontOffice/reservation/reservation.component';
import { AppRoutingModule } from '../app-routing.module';
import { ListComponent } from '../list/list.component';
import { ArticleComponent } from '../article/article.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
   // FrontComponent,
   DetailsComponent,
   ReservationComponent,
   ListComponent,
   ArticleComponent

  ],
  imports: [
    CommonModule,
    FrontOfficeRoutingModule,
    FormsModule,
    LeafletModule,



  ]
})
export class FrontOfficeModule { }
