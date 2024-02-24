import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Etudiant } from 'src/app/model/Etudiant';
import { MatDialog } from '@angular/material/dialog';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { EtudiantdialogComponent } from './etudiantdialog/etudiantdialog.component';
import {EtudiantupdatedialogComponent} from "./etudiantupdatedialog/etudiantupdatedialog.component";

@Component({
  selector: 'app-etudiant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  etudiants: Etudiant[];
  selectedetudiant: Etudiant | null =null;

  constructor(private etudiantService: EtudiantService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.getEtudiant();
  }

  getEtudiant() {
    this.etudiantService.getAllEtudiants()
      .subscribe((src:Etudiant[])=>{
        console.log(src);
        this.etudiants=src;
      })
  }

  public openDialogg() {
    const dialogRef = this.dialog.open(EtudiantdialogComponent, {
      width: '350px',
      height: '800px',
      position: { top: '-50%', left: '40%' },
    });

  }


  public openDialoggg() {
    const dialogRef = this.dialog.open(EtudiantupdatedialogComponent, {
      width: '350px',
      height: '800px',
      position: { top: '-50%', left: '40%' },
    });

  }
  addEtudiant(etudiant: Etudiant) {
    this.etudiantService.addEtudiant(etudiant)
      .subscribe(etudiant => this.etudiants.push(etudiant));
  }

  updateEtudiant(etudiant: Etudiant): void {
    this.etudiantService.updateEtudiant(etudiant)
      .subscribe(etudiant => this.etudiants = this.etudiants.map(e => e.idEtudiant === etudiant.idEtudiant ? etudiant : e));
  }

  deleteEtudiant(idEtudiant: number) {
    if(confirm("Voulez vous supprimer l'etudiant !")){

    this.etudiantService.deleteEtudiant(idEtudiant).subscribe(() => {
      alert("suppression avec succes");
      window.location.reload()

  });
}
}}
