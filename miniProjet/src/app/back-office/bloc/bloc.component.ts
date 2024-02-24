import { Component, OnInit } from '@angular/core';
import { FoyerService } from "../../services/foyer.service";
import { BlocService } from "../../services/bloc.service";
import { Foyer } from "../../model/Foyer";
import { Bloc } from "../../model/Bloc";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from '@angular/material/paginator';
import {DialogbComponent} from "./dialogb/dialogb.component";

@Component({
  selector: 'app-bloc',
  templateUrl: './bloc.component.html',
  styleUrls: ['./bloc.component.css']
})
export class BlocComponent implements OnInit {
  pageSize = 5;
  pageIndex = 0;
  constructor(private serviceu: BlocService, private service: FoyerService, private dialog: MatDialog) {}

  ngOnInit() {
    this.getAllBlocs();
    this.getFoyer();
    localStorage.clear()
  }

  nouvelleBloc: { idBloc: 0, nomBloc: '', capaciteBloc: 0, foyer: null };
  blocs: Bloc[] = [];
  foyers: Foyer[] = [];
  searchTerm: string = '';
  pagedBlocs: Bloc[] = [];

  getAllBlocs() {
    this.serviceu.getAllBlocs().subscribe((src: Bloc[]) => {
      console.log(src);
      this.blocs = src;
      this.updatePagedBlocs();
    });
  }

  deleteBloc(idBloc) {
    if (confirm("voulez vous supprimer cette Bloc !")) {
      this.serviceu.deleteBloc(idBloc).subscribe(() => {
        alert("suppression avec succes");
        window.location.reload();
      });
    }
  }

  getFoyer() {
    this.service.getFoyer().subscribe((src: Foyer[]) => {
      console.log(src);
      this.foyers = src;
    });
  }

  public openDialogg() {
    const dialogRef = this.dialog.open(DialogbComponent, {
      width: '700px',
      height: '340px',
      position: { top: '-40%', left: '30%' },
      data: { nouvelleBloc: this.nouvelleBloc },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Dialog result:', result);
        this.nouvelleBloc = result;
      }
    });
  }

  public modifierDialogBloc(blo) {
    localStorage.setItem("data", JSON.stringify(blo));
    const dialogRef = this.dialog.open(DialogbComponent, {
      width: '700px',
      height: '340px',
      position: { top: '-40%', left: '30%' },
      data: {},
    });
  }

  rechercheBloc(searchTerm: string) {
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase();
      const filteredBlocs = this.blocs.filter(bloc =>
        bloc.nomBloc.toLowerCase().includes(searchTermLower) ||
        bloc.capaciteBloc.toString().includes(searchTermLower) ||
        (bloc.foyer && bloc.foyer.nomFoyer.toLowerCase().includes(searchTermLower))
      );

      this.pagedBlocs = filteredBlocs.slice(0, this.pageSize);

    } else {
      this.getAllBlocs();
    }
  }




  updatePagedBlocs() {
    const startIndex = this.pageIndex * this.pageSize;
    this.pagedBlocs = this.blocs.slice(startIndex, startIndex + this.pageSize);
  }

  pageEvent(event: { pageIndex: number }) {
    this.pageIndex = event.pageIndex;
    this.updatePagedBlocs();
  }
}
