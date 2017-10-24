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

  constructor(
  	private journeysService: JourneysService
  	) { }

  ngOnInit() {
    this.maxRating = 5;
  	this.journeysService.getJourneys().subscribe(journeys => {
  		this.journeys = journeys;
  	},
  	err => {
  		console.log(err);
  		return false;
  	});
  }


  public starArr(num) {
    var stars = new Array;

    for (var i = 0; i < num; i++) {
      stars.push(i);
    }
    return stars;
  }

}
