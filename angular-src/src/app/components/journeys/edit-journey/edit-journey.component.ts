import { Component, ElementRef, NgZone, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FlashMessagesService } from 'angular2-flash-messages';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
import { DaterangepickerConfig } from 'ng2-daterangepicker';

import { JourneysService } from '../../../services/journeys.service';
import { ValidateService } from '../../../services/validate.service';

@Component({
  selector: 'app-edit-journey',
  templateUrl: './edit-journey.component.html',
  styleUrls: ['./edit-journey.component.css']
})
export class EditJourneyComponent implements OnInit {

  journey: any;
  journeyId: any;
  location_obj: any;
	image: any;
  imgReader: any;
  oldImage: any;
  public daterange: any = {};
  diffDays: any;
  dateLabel: any;
  public options: any = {
      locale: { format: 'YYYY-MM-DD' },
      alwaysShowCalendars: false,
  };

  public selectedDate(value: any) {
    if(value == undefined) {
      console.log("Erorr");
    } else {
      this.daterange.start = value.picker.startDate;
      this.daterange.end = value.picker.endDate;
      this.daterange.label = value.event.target.value;
      this.diffDays = Math.round(Math.abs((this.daterange.start - this.daterange.end)/(24*60*60*1000)));
      this.dateLabel = this.daterange.start.format('YYYY-MM-DD') + ' - ' + this.daterange.end.format('YYYY-MM-DD');
      this.journey.duration.days = this.diffDays;
      this.journey.duration.dateLabel = this.dateLabel;
    }
  }

  public latitude: number;
  public longitude: number;
  //public searchControl: FormControl;

  @ViewChild("editSearch")
  public searchElementRef: ElementRef;

  constructor(
  	private router: Router,
  	private activatedRoute: ActivatedRoute,
    private journeysService: JourneysService,
    private validateService: ValidateService,
  	private flashMessage: FlashMessagesService,
  	private mapsAPILoader: MapsAPILoader,
  	private ngZone: NgZone,
    private daterangepickerOptions: DaterangepickerConfig
  ) {
    this.daterangepickerOptions.settings = {
      locale: { format: 'YYYY-MM-DD' },
      alwaysShowCalendars: false
    };
  }

  onChangeImageFile(event) {
  	let image = event.srcElement.files[0];
  	this.image = image;
    let reader = new FileReader();
    reader.onload = () => {
      this.imgReader = reader.result;
    }
    reader.readAsDataURL(this.image);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
  		if(params['id']) {
      	this.journeyId = params['id'];
      } else {
	      this.router.navigate(['/journeys']);
      }
    });

  	this.journeysService.getJourney(this.journeyId).subscribe(journey => {
  		if(journey.success) {
        this.journey = journey.journey;
        this.oldImage = journey.journey.imageUrl;
      } else {
        this.router.navigate(['/journeys']);
      }
  	},
  	err => {
  		console.log(err);
  		return false;
  	});
  }

  onFocusLocationInput() {
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.location_obj = {
            address: place["formatted_address"],
            place: place.name,
            lat: this.latitude,
            lng: this.longitude
          };
          this.journey.location = this.location_obj;

        });
      });
    }).catch((err) => {
      console.log(err);
    }) ;
  }

  onEditJourneySubmit() {
    if(this.image) {
  		this.journeysService.uploadImage(this.image).subscribe(res => {
  			if(res.success) {
  				const updatedJourney = {
            id: this.journey._id,
			  		title: this.journey.title,
			  		location: this.journey.location,
			  		duration: this.journey.duration,
            type: this.journey.type,
            rating: this.journey.rating,
			  		imageUrl: res.file
			  	}

          this.journeysService.deleteImage(this.journey.imageUrl).subscribe(data => {
            if(data.success) {
              console.log(data.message);
            } else {
              console.log(data.message);
            }
          });

			    this.journeysService.editJourney(updatedJourney).subscribe(data => {
			      if(data.success) {
			      	this.flashMessage.show(data.message, {cssClass: 'alert-success', timeout: 5000});
			        this.router.navigate(['/journeys/' + this.journey._id]);
			      } else {
			      	for(let i=0; i<data.message.length; i++) {
				  			this.flashMessage.show(data.message[i].msg, {cssClass: 'alert-danger', timeout: 5000});
				  		}
			      }
			    });
  			} else {
			  	if(!this.validateService.validateImage(res)) {
			  		this.flashMessage.show('File size too big!', {cssClass: 'alert-danger', timeout: 5000});
			  		return false;
			  	}
  			}
  		});
  	} else {
	  	const updatedJourney = {
        id: this.journey._id,
	  		title: this.journey.title,
	  		location: this.journey.location,
	  		duration: this.journey.duration,
        type: this.journey.type,
        rating: this.journey.rating,
        imageUrl: this.journey.imageUrl,
	  	}

	    this.journeysService.editJourney(updatedJourney).subscribe(data => {
	      if(data.success) {
			    this.flashMessage.show(data.message, {cssClass: 'alert-success', timeout: 5000});
	        this.router.navigate(['/journeys/' + this.journey._id]);
	      } else {
	      	for(let i=0; i<data.message.length; i++) {
		  			this.flashMessage.show(data.message[i].msg, {cssClass: 'alert-danger', timeout: 5000});
		  		}
		  		return false;
	      }
	    });
    }
  }

}
