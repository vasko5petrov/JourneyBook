import { Component, OnInit } from '@angular/core';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
import { JourneysService } from '../../services/journeys.service';

@Component({
  selector: 'app-journeys-map',
  templateUrl: './journeys-map.component.html',
  styleUrls: ['./journeys-map.component.css']
})
export class JourneysMapComponent implements OnInit {

  journeys: any;
  IW: any;
  public latitude: number;
  public longitude: number;

  public zoom: number;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private journeysService: JourneysService
  ) { }

  ngOnInit() {
    this.journeysService.getJourneys().subscribe(journeys => {
  		this.journeys = journeys;
      this.zoom = 6;
      for(let i = 0; i < journeys.length; i++) {
        this.latitude = journeys[i].location.lat;
        this.longitude = journeys[i].location.lng;
      }
  	},
  	err => {
  		console.log(err);
  		return false;
  	});
  }

  public clickedMarker(data = undefined) {
    if(this.IW){
      this.IW.close();
    }

    this.IW = data;
  }

  setMarkerIcon(m) {
    if (m.type === "Mountain") {
      return "http://localhost:3000/images/mountain_pin.png"
    } else if(m.type === "Monuments") {
      return "http://localhost:3000/images/monuments_pin.png"
    } else if(m.type === "Sea") {
      return "http://localhost:3000/images/sea_pin.png"
    } else if(m.type === "Spa") {
      return "http://localhost:3000/images/spa_pin.png"
    } else {
      return "http://localhost:3000/images/pin.png"
    }
  }

}
