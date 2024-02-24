import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef, Input,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import { Foyer } from "../../model/Foyer";
import { Universite } from "../../model/Universite";
import { UniversiteService } from "../../services/universite.service";
import { FoyerService } from "../../services/foyer.service";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "./dialog/dialog.component";
import { ListblocdialogComponent } from "./listblocdialog/listblocdialog.component";
import {Bloc} from "../../model/Bloc";
import { Chart } from 'chart.js/auto';
import {NotificationService} from "./notification.service";
import {readTsconfig} from "@angular-devkit/build-angular/src/utils/read-tsconfig";

@Component({
  selector: 'app-foyer',
  templateUrl: './foyer.component.html',
  styleUrls: ['./foyer.component.css']
})
export class FoyerComponent implements OnInit,AfterViewInit {
  nouvelleFoyer: Foyer = { idFoyer: 0, nomFoyer: '', capaciteFoyer: 0, universite: null, bloc: null };
  foyers: Foyer[] = [];
  universites: Universite[] = [];
  pageSize = 5;
  pageIndex = 0;
  moyenneCapacite: number = 0;
  foyerAvecCapaciteMaximale: Foyer | null = null;
  myChart: any;
  @ViewChild('myChartCanvas') myChartCanvas: ElementRef;
  showChart: boolean = false;
  notifications: string[] = [];
  showSearchSection: boolean = false;

  selectedFoyer: Foyer | null = null;

  // New variables for statistical information
  averageCapacity: number = 0;
  maxCapacityFoyer: Foyer | null = null;
  nomFoyer: string = '';
  capaciteFoyer: number = 0;
  nomUniversite: string = '';


  constructor(private renderer: Renderer2,private cdr: ChangeDetectorRef,
              private notificationService: NotificationService,
              private service: UniversiteService, private serviceu: FoyerService, private dialog: MatDialog) { }

  pagedFoyer: Foyer[] = [];
  getUniversiteName(id: number): string {
    const universite = this.universites.find(u => u.idUniversite === id);
    return universite ? String(universite.nomUniversite) : '';
  }


  ngOnInit() {
    this.getFoyer();
    this.getUniversite();
    this.notificationService.getNotifications().subscribe((notifications) => {
      this.notifications = notifications;
    });
  }


  ngAfterViewInit() {
    // Check if the chart should be displayed and the canvas is available
    if (this.showChart && this.myChartCanvas) {
      this.createChart();
    }
  }

  getUniversite() {
    this.service.getAllUniversity().subscribe((src: Universite[]) => {
      console.log(src);
      this.universites = src;
    });
  }

  getFoyer() {
    this.serviceu.getFoyer().subscribe((src: Foyer[]) => {
      console.log(src);
      this.foyers = src;
      this.updatePagedFoyer();
      this.calculerStatistiques();

    });
  }

  deleteFoyer(foyerId) {
    if (confirm('Voulez-vous supprimer cette Foyer !')) {
      this.serviceu.deleteFoyer(foyerId).subscribe(() => {
        alert('Suppression avec succès');
        this.getFoyer();
        this.notificationService.addTimedNotification(`Foyer ${foyerId} supprimé avec succès.`);

      });
    }
  }

  public openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '700px',
      height: '340px',
      position: { top: '-40%', left: '30%' },
      data: { nouvelleFoyer: this.nouvelleFoyer }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Dialog result:', result);
        this.nouvelleFoyer = result;
      }
    });
  }

  public modifierDialog(foye) {
    localStorage.setItem('data', JSON.stringify(foye));
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '700px',
      height: '340px',
      position: { top: '-40%', left: '30%' },
      data: {}
    });
  }

  public listBlocDialog(foyer) {
    this.serviceu.getBlocsForFoyer(foyer.idFoyer).subscribe((blocs: string[]) => {
      localStorage.setItem('data', JSON.stringify(foyer));
      const dialogRef = this.dialog.open(ListblocdialogComponent, {
        width: '700px',
        height: '330px',
        position: { top: '-40%', left: '30%' },
        data: { foyer: foyer, blocs: blocs }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log('List Bloc Dialog result:', result);
        }
      });
    });
  }

  updatePagedFoyer() {
    const startIndex = this.pageIndex * this.pageSize;
    this.pagedFoyer = this.foyers.slice(startIndex, startIndex + this.pageSize);
  }

  pageEvent(event: { pageIndex: number }) {
    this.pageIndex = event.pageIndex;
    this.updatePagedFoyer();
  }


  onStatistiqueButtonClick() {
    this.showChart = !this.showChart;
    if (this.showChart && this.myChartCanvas) {
      this.createChart();
    } else if (this.myChart) {
      this.myChart.destroy();
    }
  }



  calculerStatistiques() {
    this.averageCapacity = Foyer.calculerMoyenneCapacite(this.foyers);
    this.maxCapacityFoyer = Foyer.trouverFoyerCapaciteMaximale(this.foyers);
    this.createChart();
  }



  createChart() {
    if (this.showChart && this.myChartCanvas) {
      const canvas = this.myChartCanvas.nativeElement;
      const ctx = canvas.getContext('2d');

      if (this.myChart) {
        this.myChart.destroy();
      }

      const data = {
        labels: this.pagedFoyer.map((foyer) => foyer.nomFoyer),
        datasets: [
          {
            label: 'Capacite du foyer',
            data: this.pagedFoyer.map((foyer) => foyer.capaciteFoyer),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      };

      const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        onClick: (event, activeElements) => this.handleChartClick(event, activeElements),

      };

      this.myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options,
      });

      this.cdr.detectChanges();
    }
  }
  handleChartClick(event, activeElements) {
    if (activeElements.length > 0) {
      const index = activeElements[0].index;
      this.selectedFoyer = this.pagedFoyer[index];
    } else {
      this.selectedFoyer = null;
    }
  }


  closeSelectedFoyer() {
    this.selectedFoyer = null;
  }

  searchFoyers() {
    const nomFoyer = this.nomFoyer || '';
    const capaciteFoyer = this.capaciteFoyer || 0;
    const nomUniversite = this.nomUniversite || '';

    this.serviceu.searchFoyers(nomFoyer, capaciteFoyer, nomUniversite).subscribe((src: Foyer[]) => {
      console.log(src);
      this.foyers = src;
      this.updatePagedFoyer();
    });
  }





  toggleSearchSection() {
    this.showSearchSection = !this.showSearchSection;

    if (!this.showSearchSection) {
      this.nomFoyer = '';
      this.capaciteFoyer = 0;
      this.nomUniversite = '';
    }
  }

}
