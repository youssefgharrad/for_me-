import { Component } from '@angular/core';
import { Foyer } from 'src/app/model/Foyer';
import { Universite } from 'src/app/model/Universite';
import { UniversiteService } from 'src/app/services/universite.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  universites : Universite[]=[];
  foyers : Foyer[]=[]
  selectedUniversite: Universite | null = null;
  constructor(private serviceu:UniversiteService){}
  ngOnInit() {
    this.getUniversite();
    this.getFoyer();
    
    
  }
  
getUniversite(){
  this.serviceu.getAllUniversity().subscribe((src:Universite[])=>{
    console.log(src);
    this.universites=src;
  })
}

getFoyer(){
  this.serviceu.getFoyer().subscribe((src:Foyer[])=>{
    console.log(src);
    this.foyers=src;
  })
}

}
