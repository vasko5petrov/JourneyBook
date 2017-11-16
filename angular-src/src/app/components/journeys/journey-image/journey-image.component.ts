import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { JourneysService } from '../../../services/journeys.service';
import { ValidateService } from '../../../services/validate.service';
import { ConfirmComponent } from '../../modal/confirm-modal.component';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-journey-image',
  templateUrl: './journey-image.component.html',
  styleUrls: ['./journey-image.component.css']
})
export class JourneyImageComponent implements OnInit {

  journey: any;
  journeyId: String;

  image: any;
  imgReader: any;
  locationImage: any;
  oldImage: any;
  photosUrls: any = [];

  messageTimeout: number = 3000;

  previousUrl: string;
  newJourney: boolean;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    	private router: Router,
    	private activatedRoute: ActivatedRoute,
    	private journeysService: JourneysService,
    	private validateService: ValidateService,
      private flashMessage: FlashMessagesService,
      private mapsAPILoader: MapsAPILoader
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
  		if(params['id']) {
      	this.journeyId = params['id'];
      } else {
	      this.router.navigate(['/journeys']);
      }
    });

  	this.journeysService.getJourney(this.journeyId).subscribe(res => {
  		if(res.success) {
        this.journey = res.journey;
        this.oldImage = res.journey.imageUrl;
        this.previousUrl = localStorage.getItem('prev');
        if(this.previousUrl != '/add-journey') {
          this.newJourney = false;
        } else {
          this.newJourney = true;
        }
        this.mapsAPILoader.load().then(() => {
          let geocoder = new google.maps.Geocoder();
          geocoder.geocode({'address': this.journey.location.address}, (res, status) => {
            if(status == google.maps.GeocoderStatus.OK) {

              let placesService = new google.maps.places.PlacesService(this.searchElementRef.nativeElement);
              placesService.getDetails({
                placeId: res[0].place_id
              }, (placeResult, status) => {
                  let photos = placeResult.photos;

                  photos.forEach((photo) => {
                    this.photosUrls.push(photo.getUrl({
                      maxWidth: 1200,
                      maxHeight: undefined
                    }));
                  });
              });
            }
          });
        });
      }
      if(!res.success) {
        this.router.navigate(['/journeys']);
      }
  	},
  	err => {
  		console.log(err);
  		return false;
  	});

  }

  onChangeImageFile(event) {
    let image = event.srcElement.files[0];
    this.image = image;
    let reader = new FileReader();
    reader.onload = () => {
      this.imgReader = reader.result;
    }
    if(event.srcElement.files[0] && event.srcElement.files[0].type == 'image/jpeg') {
      reader.readAsDataURL(this.image);
    } else {
      this.flashMessage.show('This file will not be uploaded! Please select an image file!', {cssClass: 'alert-danger', timeout: this.messageTimeout});
      this.image = null;
      this.imgReader = null;
      return false;
    }
  }

  removeCurrentImage() {
    this.oldImage = 'defaultImage.png';
    this.image = 'defaultImage.png';
  }

  imageFromLocation() {

    let randomPhoto = this.photosUrls[Math.floor(Math.random() * this.photosUrls.length)];
    this.imgReader = randomPhoto;
  }

  onAddJourneyImageSubmit() {

    const journeyWithImg = {
      id: this.journey._id,
      title: this.journey.title,
      location: this.journey.location,
      duration: this.journey.duration,
      type: this.journey.type,
      rating: this.journey.rating,
      imageUrl: this.journey.imageUrl,
    }

    if(this.image) {
      if(this.image === 'defaultImage.png') {
        if(this.journey.imageUrl.substr(0, 4) != 'http') {
          this.journeysService.deleteImage(this.journey.imageUrl).subscribe(data => {
            if(data.success) {
              // console.log(data.message);
            } else {
              // console.log(data.message);
            }
          });
        }
        journeyWithImg.imageUrl = 'defaultImage.png';
        this.journeysService.editJourney(journeyWithImg).subscribe(data => {
          if(data.success) {
            this.flashMessage.show(data.message, {cssClass: 'alert-success', timeout: this.messageTimeout});
            this.router.navigate(['/journeys/' + this.journey._id]);
          } else {
            for(let i=0; i<data.message.length; i++) {
              this.flashMessage.show(data.message[i].msg, {cssClass: 'alert-danger', timeout: this.messageTimeout});
            }
            return false;
          }
        });
      }
  		this.journeysService.uploadImage(this.image).subscribe(res => {
  			if(res.success) {
          journeyWithImg.imageUrl = res.file;
          if (typeof(this.journey.imageUrl) != 'undefined') {
            if(this.journey.imageUrl != 'defaultImage.png') {
              if(this.journey.imageUrl.substr(0, 4) != 'http') {
                this.journeysService.deleteImage(this.journey.imageUrl).subscribe(data => {
                  if(data.success) {
                    // console.log(data.message);
                  } else {
                    // console.log(data.message);
                  }
                });
              }
            }
          }

          this.journeysService.editJourney(journeyWithImg).subscribe(data => {
            if(data.success) {
              this.flashMessage.show(data.message, {cssClass: 'alert-success', timeout: this.messageTimeout});
              this.router.navigate(['/journeys/' + this.journey._id]);
            } else {
              for(let i=0; i<data.message.length; i++) {
                this.flashMessage.show(data.message[i].msg, {cssClass: 'alert-danger', timeout: this.messageTimeout});
              }
              return false;
            }
          });
  			} else {
			  	if(!this.validateService.validateImage(res)) {
			  		this.flashMessage.show('File size too big!', {cssClass: 'alert-danger', timeout: this.messageTimeout});
			  		return false;
			  	}
  			}
  		});
  	} else {
      if(this.imgReader.substr(0, 4) == 'http') {
        journeyWithImg.imageUrl = this.imgReader;
        if(this.journey.imageUrl != 'defaultImage.png') {
          this.journeysService.deleteImage(this.journey.imageUrl).subscribe(data => {
            if(data.success) {
              // console.log(data.message);
            } else {
              // console.log(data.message);
            }
          });
        }
      }
      this.journeysService.editJourney(journeyWithImg).subscribe(data => {
        if(data.success) {
          this.flashMessage.show(data.message, {cssClass: 'alert-success', timeout: this.messageTimeout});
          this.router.navigate(['/journeys/' + this.journey._id]);
        } else {
          for(let i=0; i<data.message.length; i++) {
            this.flashMessage.show(data.message[i].message, {cssClass: 'alert-danger', timeout: this.messageTimeout});
          }
          return false;
        }
      });
    }
  }

}
