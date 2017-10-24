import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { JourneysService } from '../../../services/journeys.service';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent implements OnInit {
	title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;

	journey: any;
	journeyId: String;

  maxRating: any;

  constructor(
  	private router: Router,
  	private activatedRoute: ActivatedRoute,
  	private journeysService: JourneysService
  	) { }

  ngOnInit() {
    this.maxRating = 5;
  	this.activatedRoute.params.subscribe((params: Params) => {
  		if(params['id']) {
      	this.journeyId = params['id'];
      } else {
	      this.router.navigate(['/journeys']);
      }
    });

  	this.journeysService.getJourney(this.journeyId).subscribe(journey => {
  		this.journey = journey;
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
