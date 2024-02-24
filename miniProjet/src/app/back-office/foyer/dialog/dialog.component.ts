import { Component, Inject, OnInit } from '@angular/core';
import { Foyer } from "../../../model/Foyer";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FoyerService } from "../../../services/foyer.service";
import { UniversiteService } from "../../../services/universite.service";
import { Universite } from "../../../model/Universite";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  nouvelleFoyer: Foyer = { ...this.data.nouvelleFoyer };
  nouvelFoyer: Foyer = { idFoyer: 0, nomFoyer: '', capaciteFoyer: 0, universite: { idUniversite: 0, nomUniversite: '', adresse: '' }, bloc: null };
  universites: Universite[] = [];
  minCapacity = 1;
  maxCapacity=500;
  numberPattern = '^[0-9]*$';
  inputValidationForm: FormGroup;



  public dialogRef: MatDialogRef<DialogComponent>;

  constructor(
    private serviceu: FoyerService,
    private service: UniversiteService,
    private fb: FormBuilder,
    dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { nouvelleFoyer: Foyer, blocks: string[] }
  ) {
    this.dialogRef = dialogRef;
  }

  ngOnInit(): void {
    this.service.getAllUniversityWithoutFoyer().subscribe(
      (universites: Universite[]) => {
        console.log('Universites récupérées avec succès:', universites);
        this.universites = universites;
      },
      error => {
        console.error('Erreur lors de la récupération des universités:', error);
      }
    );

    this.inputValidationForm = this.fb.group({
      capaciteBloc: [
        this.nouvelFoyer.capaciteFoyer,
        [Validators.required, Validators.pattern(this.numberPattern), Validators.min(this.minCapacity), Validators.max(this.maxCapacity)]
      ]
    });
    const storedData = localStorage.getItem("data");
    if (storedData !== null) {
      const foy: Foyer = JSON.parse(storedData);
      this.nouvelFoyer = { ...foy, universite: { ...foy.universite } };
      console.log(this.nouvelFoyer);
      localStorage.clear();
    }
  }
  validateMaxValue(value: number): boolean {
    return value <= 500;
  }
  get capaciteBlocControl() {
    return this.inputValidationForm.get('capaciteBloc');
  }


  ajouterFoyer() {
    this.serviceu.ajouterFoyer(this.nouvelleFoyer).subscribe(() => {
      console.log('Foyer added successfully', this.nouvelleFoyer);
      window.location.reload();
    });
  }

  updateFoyer() {
    this.serviceu.modifierFoyer(this.nouvelFoyer).subscribe(

      () => {

        console.log('Foyer modifié avec succès', this.nouvelFoyer);
        window.location.reload();
      },
      error => {
        console.error('Erreur lors de la modification du foyer:', error);

      }
    );

    localStorage.clear();
  }




  onNoClick(): void {
    this.dialogRef.close();
  }

  onUniversiteSelected(idUniversite: number) {
    const selectedUniversite = this.universites.find(u => u.idUniversite === idUniversite);

    if (selectedUniversite) {
      this.nouvelFoyer.universite = { ...selectedUniversite };
      this.nouvelFoyer.universite.idUniversite = selectedUniversite.idUniversite;
    }
  }

}
