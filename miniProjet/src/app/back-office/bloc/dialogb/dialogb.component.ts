import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Bloc } from "../../../model/Bloc";
import { BlocService } from "../../../services/bloc.service";
import { Foyer } from "../../../model/Foyer";
import { FoyerService } from "../../../services/foyer.service";
import {Universite} from "../../../model/Universite";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dialogb',
  templateUrl: './dialogb.component.html',
  styleUrls: ['./dialogb.component.css']
})
export class DialogbComponent implements OnInit {

  nouvelleBloc: Bloc = { ...this.data.nouvelleBloc };
  nouBloc: Bloc = { idBloc: 0, nomBloc: '', capaciteBloc: 0, foyer: { idFoyer: 0, nomFoyer: '',capaciteFoyer:0, universite: null,bloc:null } };
  foyers: Foyer[] = [];
  minCapacity = 1;
  maxCapacity=500;
  numberPattern = '^[0-9]*$';
  inputValidationForm: FormGroup;


  public dialogRef: MatDialogRef<DialogbComponent>;

  constructor(private serviceb: BlocService,
              private servicef: FoyerService,
              private fb: FormBuilder,
              dialogRef: MatDialogRef<DialogbComponent>, private service: FoyerService,
              @Inject(MAT_DIALOG_DATA) public data: { nouvelleBloc: Bloc }) {
    this.dialogRef = dialogRef;
  }

  ngOnInit(): void {

    this.servicef.getFoyer().subscribe(
      (foyers: Foyer[]) => {
        console.log('foyer récupérées avec succès:', foyers);
        this.foyers = foyers;
      },
      error => {
        console.error('Erreur lors de la récupération des foyer:', error);
      }
    );
    this.inputValidationForm = this.fb.group({
      capaciteBloc: [
        this.nouBloc.capaciteBloc,
        [Validators.required, Validators.pattern(this.numberPattern), Validators.min(this.minCapacity), Validators.max(this.maxCapacity)]
      ]
    });

    const storedData = localStorage.getItem("data");
    if (storedData !== null) {
      const blo: Bloc = JSON.parse(storedData);
      this.nouBloc = blo;
      console.log(this.nouBloc);
      localStorage.clear();
    }
  }
  validateMaxValue(value: number): boolean {
    return value <= 500;
  }
  get capaciteBlocControl() {
    return this.inputValidationForm.get('capaciteBloc');
  }

  ajouterBloc() {
    console.log('Sending data to backend:', this.nouvelleBloc.nomBloc);
    console.log('Sending data to backend:', this.nouvelleBloc.capaciteBloc);

    this.serviceb.ajouterBloc(this.nouvelleBloc).subscribe(() => {
      console.log('Bloc added successfully', this.nouvelleBloc);
      window.location.reload();
    });
  }

  updateBloc() {
    this.serviceb.modifierBloc(this.nouBloc).subscribe(() => {
      console.log('Bloc updated successfully', this.nouBloc);
      localStorage.clear();
      window.location.reload();
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  onFoyerSelected(idFoyer: number) {
    const selectedFoyer = this.foyers.find(f => f.idFoyer === idFoyer);

    if (selectedFoyer) {
      this.nouBloc.foyer = { ...selectedFoyer };
      this.nouBloc.foyer.idFoyer = selectedFoyer.idFoyer;
    }
  }


}
