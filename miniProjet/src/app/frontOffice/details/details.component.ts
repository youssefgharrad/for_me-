import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Foyer } from 'src/app/model/Foyer';
import { UniversiteService } from 'src/app/services/universite.service';
import * as Leaflet from 'leaflet';
import { LeafletModule } from '@asymmetrik/ngx-leaflet'; 

Leaflet.Icon.Default.imagePath = 'assets/';

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: 'assets/marker-icon-2x.png',
  iconUrl: 'assets/marker-icon.png',
  shadowUrl: 'assets/marker-shadow.png'
});


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {





  lat: number;
  lot:number;
  
  idUniversite: number; 
  universityDetails: any={}; // Adjust the type according to your data structure
foyers:Foyer[]=[]
  constructor(private route: ActivatedRoute, private universityService: UniversiteService,private el: ElementRef) {}


// getFoyerName(id :number):string
// {
// const foyer:Foyer=this.foyers.find(f=>f.idFoyer===id);
// return foyer ? String (foyer.nomFoyer):'';

// }

ngOnInit(): void {
  this.route.params.subscribe((params) => {
    this.idUniversite = +params['id'];

    this.universityService.getUniversiteById(this.idUniversite).subscribe(
      (universite) => {
        // Pre-fill the form fields with existing data
        this.universityDetails = universite;

  if (  this.universityDetails.adresse == "Esprit Chotrana2 Ariana"){

    this.lat = 36.8886027193465;
this.lot =  10.187385396949868;

    //this.initMarkers(this.lat,this.lot)


 

  }

  else if (  this.universityDetails.adresse == "Iset Nabeul"){

    this.lat = 36.43684;
    this.lot =  10.67702;
    //this.initMarkers(this.lat,this.lot)

  }
  else if (  this.universityDetails.adresse == "IHEC Carthage"){

    this.lat = 36.86262;
    this.lot =  10.33830;
    //this.initMarkers(this.lat,this.lot)

  }
  else if (  this.universityDetails.adresse == "EniSousse"){

    this.lat = 35.82154;
    this.lot =  10.59240;
    //this.initMarkers(this.lat,this.lot)

  }
  this.initMarkers(this.lat,this.lot);

  



        console.log(this.universityDetails)

        console.log(this.lat)
      },
      (error) => {
        console.error('Error fetching university data:', error);
      }
    );

  });
  console.log(this.lat)



  this.getFoyer()





  
  
}

  

  getFoyer(){
    this.universityService.getFoyer().subscribe((src:Foyer[])=>{
      console.log(src);
      this.foyers=src;
    })

  }


  map!: Leaflet.Map;
  markers: Leaflet.Marker[] = [];
  options = {
    layers: [
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      })
    ],
    zoom: 14,
  }


  generateMarker(data: any, index: number) {
    return Leaflet.marker(data.position, { draggable: data.draggable })
      .on('click', (event) => this.markerClicked(event, index))
      .on('dragend', (event) => this.markerDragEnd(event, index));
  }

  initMarkers(lat,lot) {
    const initialMarkers = [
      {
        position: { lat: lat
          , lng: lot
        },
        draggable: false
      },
      
    ];
    for (let index = 0; index < initialMarkers.length; index++) {
      const data = initialMarkers[index];
      const marker = this.generateMarker(data, index);
      marker.addTo(this.map).bindPopup(`<b>${this.universityDetails.adresse}</b>`);
      this.map.panTo(data.position);
      this.markers.push(marker)
    }
  }
  
  onMapReady($event: Leaflet.Map) {
    this.map = $event;
    this.initMarkers(this.lat,this.lot);
    


  }

  mapClicked($event: any) {
    console.log($event.latlng.lat, $event.latlng.lng);
  }

  markerClicked($event: any, index: number) {
    console.log($event.latlng.lat, $event.latlng.lng);
  }

  markerDragEnd($event: any, index: number) {
    console.log($event.target.getLatLng());
  } 


  
  showReservationComponent = false;



}



