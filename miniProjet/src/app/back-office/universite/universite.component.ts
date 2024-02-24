import { Component,OnInit } from '@angular/core';
import {UniversiteService} from "../../services/universite.service";
import {Universite} from "../../model/Universite";
import {Foyer} from "../../model/Foyer";
import {MatDialog} from "@angular/material/dialog";
import {UniversitedialogComponent} from "./universitedialog/universitedialog.component";
import {UniversiteupdadialogComponent} from "./universiteupdadialog/universiteupdadialog.component";
import {debounceTime, distinctUntilChanged, Subject, switchMap} from "rxjs";

@Component({
  selector: 'app-universite',
  templateUrl: './universite.component.html',
  styleUrls: ['./universite.component.css']
})

export class UniversiteComponent implements OnInit{
  universites : Universite[]=[]
  foyers : Foyer[]=[]
  selectedUniversite: Universite | null = null;
  nouvelleUniversite: { idUniversite: 0, nomUniversite: '', adresse: "" };
  searchQuery: string = '';
  private searchTerms = new Subject<string>();
  constructor(private serviceu:UniversiteService,
    private dialog: MatDialog) {}
  ngOnInit() {
    this.getUniversite();
    this.getFoyer();

    // React to changes in the search query
    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.serviceu.searchUniversities(term))
    ).subscribe(universities => {
      // Update universities based on search results
      this.universites = universities;
    });

  }
  onSearch(): void {
    this.searchTerms.next(this.searchQuery);
  }


  getUniversite(){
    this.serviceu.getAllUniversity().subscribe((src:Universite[])=>{
      console.log(src);
      this.universites=src;
    })
}

  getFoyer() {
    this.serviceu.getFoyer().subscribe((src: Foyer[]) => {
      console.log(src);
      this.foyers = src;
    });
  }
  deleteUniversite(idUniversite){
    if(confirm("voulez vous supprimer cette Universite !")){
      this.serviceu.deleteUniverister(idUniversite).subscribe(()=>{
        alert("suppression avec succes");
        window.location.reload()

      });
    }
  }


  public openDialogg() {
    const dialogRef = this.dialog.open(UniversitedialogComponent, {
      width: '700px',
      height: '340px',
      position: { top: '-40%', left: '30%' },
    });

  }



  public openDialogUpdate(idUniversite: number) {
    const dialogRef = this.dialog.open(UniversiteupdadialogComponent, {
      width: '700px',
      height: '340px',
      position: { top: '-40%', left: '30%' },
      data: { idUniversite: idUniversite }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }



}


