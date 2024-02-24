import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Chambre} from "../../model/Chambre";
import {ChambreService} from "../../services/chambre.service";
import {MatDialog} from "@angular/material/dialog";
import {Bloc} from "../../model/Bloc";
import {ChambreFromDialogComponent} from "./chambre-from-dialog/chambre-from-dialog.component";
import {ChambreFromUpdaDialogComponent} from "./chambre-from-upda-dialog/chambre-from-upda-dialog.component";
import {BlocService} from "../../services/bloc.service";

@Component({

  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.css']

})
export class ChambreComponent implements OnInit{

  chambres: Chambre[]=[];
  blocs: Bloc[] = [];

  searchtext:any;
  selectedchambre: Chambre | null =null;




  constructor (private chambreservice : ChambreService,
               private serviceu: BlocService,
               private ChambreDialog: MatDialog){}

  ngOnInit(){
    this.getChambre();
    this.getAllBlocs();

  }

  getAllBlocs() {
    this.serviceu.getAllBlocs().subscribe((src: Bloc[]) => {
      console.log(src);
      this.blocs = src;

    });
  }
  getChambre(){
    this.chambreservice.getAllChambres().subscribe((src:Chambre[])=>{
      console.log(src);
      this.chambres=src;
    })
  }
  deleteChambre(idChambre: number){
    if(confirm("voulez vous supprimer cette Universite !")){
      this.chambreservice.deleteChambre(idChambre).subscribe(()=>{
        alert("suppression avec succes");
        window.location.reload()

      });
    }
  }

  openChambreFormDialog() {
    const dialogRef = this.ChambreDialog.open(ChambreFromDialogComponent, {
      width: '700px',
      height: '410px',
      position: { top: '-40%', left: '30%' },
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle the result if needed
      console.log('The dialog was closed', result);
    });
  }


  openChambrefmDialog() {
    const dialogRef = this.ChambreDialog.open(ChambreFromUpdaDialogComponent, {
      width: '700px',
      height: '410px',
      position: { top: '-40%', left: '30%' },
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle the result if needed
      console.log('The dialog was closed', result);
    });
  }


}
