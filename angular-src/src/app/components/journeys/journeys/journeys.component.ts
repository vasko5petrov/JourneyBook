import { Component, OnInit } from '@angular/core';
import { JourneysService } from '../../../services/journeys.service';

@Component({
  selector: 'app-journeys',
  templateUrl: './journeys.component.html',
  styleUrls: ['./journeys.component.css']
})
export class JourneysComponent implements OnInit {

  journeys: any;
  maxRating: any;
  search: any;
  typePercent: any;

  sort: any;
  order = "date";
  option = true;
  nCnt: number = 0;

  itemsPerPage: any = 6;

  constructor(
  	private journeysService: JourneysService
  	) { }

  private journeysPercent() {
    let totalJourneys = this.journeys.length;
    let typeSea = 0, typeSpa = 0, typeMountain = 0, typeMonuments = 0, typeNone = 0;
    for (let i = 0; i < totalJourneys; i++) {
      if(this.journeys[i].type === "Sea") {
        typeSea++;
      } else if(this.journeys[i].type === "Spa") {
        typeSpa++;
      } else if(this.journeys[i].type === "Mountain") {
        typeMountain++;
      } else if(this.journeys[i].type === "Monuments") {
        typeMonuments++;
      } else {
        typeNone++;
      }
    }
    if(totalJourneys === 0) {
      this.typePercent = {
        none: "0%",
        sea: "0%",
        spa: "0%",
        mountain: "0%",
        monuments: "0%"
      }
    } else {
      this.typePercent = {
        none: Math.floor((typeNone/totalJourneys)*100) + "%",
        sea: Math.floor((typeSea/totalJourneys)*100) + "%",
        spa: Math.floor((typeSpa/totalJourneys)*100) + "%",
        mountain: Math.floor((typeMountain/totalJourneys)*100) + "%",
        monuments: Math.floor((typeMonuments/totalJourneys)*100) + "%"
      }
    }
  }

  ngOnInit() {
    this.maxRating = 5;
  	this.journeysService.getJourneys().subscribe(journeys => {
  		this.journeys = journeys;
      this.journeysPercent();
  	},
  	err => {
  		console.log(err);
  		return false;
  	});
  }

  sortBy(name){
    this.order = name;
    this.nCnt = this.nCnt + 1;
    if(this.nCnt%2) {
      this.option = true;
    } else {
      this.option = false;
    }
  }

  searchJourney(){
    if(this.search != '') {
      this.journeysService.getJourneysByQuery(this.search.toLowerCase()).subscribe(journeys => {
    		this.journeys = journeys;
        this.journeysPercent();
    	},
    	err => {
    		console.log(err);
    		return false;
    	});
    } else {
      this.journeysService.getJourneys().subscribe(journeys => {
        this.journeys = journeys;
        this.journeysPercent();
      },
      err => {
        console.log(err);
        return false;
      });
    }
  }

  public starArr(num) {
    var stars = new Array;

    for (var i = 0; i < num; i++) {
      stars.push(i);
    }
    return stars;
  }

}
