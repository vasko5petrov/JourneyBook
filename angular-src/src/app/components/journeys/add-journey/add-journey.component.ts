import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { FlashMessagesService } from 'angular2-flash-messages';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
import { DaterangepickerConfig } from 'ng2-daterangepicker';

import { JourneysService } from '../../../services/journeys.service';
import { ValidateService } from '../../../services/validate.service';

@Component({
  selector: 'app-add-journey',
  templateUrl: './add-journey.component.html',
  styleUrls: ['./add-journey.component.css']
})
export class AddJourneyComponent implements OnInit {

  public daterange: any = {};
  diffDays: any;
  dateLabel: any;
  public options: any = {
      locale: { format: 'YYYY-MM-DD' },
      alwaysShowCalendars: false,
  };

	public latitude: number;
  public longitude: number;
  //public searchControl: FormControl;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  title: any;
	location: any;
	location_obj: any;
	duration: any;
  type: any;
  rating: any;
	// image: any;
  // imgReader: string;

  messageTimeout: number = 3000;

  constructor(
  	private router: Router,
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

  ngOnInit() {

    this.latitude = 39.8282;
    this.longitude = -98.5795;

    //create search FormControl
    //this.searchControl = new FormControl();

    //set current position
    //this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          // for(let i = 0; i < place.photos.length; i++) {
          //   console.log(place.photos[i].getUrl({'maxWidth': 1600, 'maxHeight': 1200}));
          // }

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
          this.location = place["formatted_address"];

        });
      });
    });

  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      });
    }
  }

  public selectedDate(value: any) {
    if(value == undefined) {
      console.log("Erorr");
    } else {
      this.daterange.start = value.picker.startDate;
      this.daterange.end = value.picker.endDate;
      this.daterange.label = value.event.target.value;
      this.diffDays = Math.round(Math.abs((this.daterange.start - this.daterange.end)/(24*60*60*1000)));
      this.dateLabel = this.daterange.start.format('YYYY-MM-DD') + ' - ' + this.daterange.end.format('YYYY-MM-DD');
      this.duration = {
        days: this.diffDays,
        dateLabel: this.dateLabel,
        start: Date.parse(this.daterange.start),
        end: Date.parse(this.daterange.end)
      };
    }
  }

  // removeImageFile() {
  //   this.image = null;
  //   this.imgReader = null;
  // }
  //
  // onChangeImageFile(event) {
  // 	let image = event.srcElement.files[0];
  // 	this.image = image;
  //   let reader = new FileReader();
  //   reader.onload = () => {
  //     this.imgReader = reader.result;
  //   }
  //
  //   if(this.image && this.image.type == 'image/jpeg') {
  //     reader.readAsDataURL(this.image);
  //   } else {
  //     this.flashMessage.show('This file will not be uploaded! Please select an image file!', {cssClass: 'alert-danger', timeout: this.messageTimeout});
  //     this.image = null;
  //     this.imgReader = null;
  //   }
  // }

  onAddJourneySubmit() {
    if(this.type == "" || this.type == undefined) {
      this.type = "None";
    }
    if(this.rating == "" || this.rating == undefined) {
      this.rating = "Not rated";
    }

    const journey = {
      title: this.title,
      location: this.location_obj,
      duration: this.duration,
      type: this.type,
      rating: this.rating
    }

  	// if(this.image) {
  	// 	this.journeysService.uploadImage(this.image).subscribe(res => {
  	// 		if(res.success) {
  	// 			journey['imageUrl'] = res.file;
    //
		// 	    this.journeysService.addJourney(journey).subscribe(data => {
		// 	      if(data.success) {
		// 	      	this.flashMessage.show(data.message, {cssClass: 'alert-success', timeout: this.messageTimeout});
		// 	        this.router.navigate(['/journeys']);
		// 	      } else {
		// 	      	for(let i=0; i<data.message.length; i++) {
		// 		  			this.flashMessage.show(data.message[i].message, {cssClass: 'alert-danger', timeout: this.messageTimeout});
		// 		  		}
		// 	      }
		// 	    });
  	// 		} else {
		// 	  	if(!this.validateService.validateImage(res)) {
		// 	  		this.flashMessage.show('File size too big!', {cssClass: 'alert-danger', timeout: this.messageTimeout});
		// 	  		return false;
		// 	  	}
  	// 		}
  	// 	});
  	// } else {
	  	journey['imageUrl'] = 'defaultImage.png';

      this.journeysService.addJourney(journey).subscribe(data => {
        if(data.success) {
          this.flashMessage.show(data.message, {cssClass: 'alert-success', timeout: this.messageTimeout});
          this.router.navigate(['/edit-journey/'+data.id+'/image']);
        } else {
          for(let i=0; i<data.message.length; i++) {
            this.flashMessage.show(data.message[i].message, {cssClass: 'alert-danger', timeout: this.messageTimeout});
          }
        }
      });
  //   }
  }

}
