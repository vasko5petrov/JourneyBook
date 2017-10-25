import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { JourneysService } from '../../../services/journeys.service';
import { ConfirmComponent } from '../../modal/confirm-modal.component';
import { DialogService } from "ng2-bootstrap-modal";

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
  	private journeysService: JourneysService,
    private flashMessage: FlashMessagesService,
    private dialogService: DialogService
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

  	this.journeysService.getJourney(this.journeyId).subscribe(res => {
  		if(res.success) this.journey = res.journey;
      if(!res.success) {
        this.router.navigate(['/journeys']);
      }
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

  // deleteJourney() {
  //   this.journeysService.deleteJourney(this.journeyId).subscribe(res => {
  //     if(res.success) {
  //       this.journeysService.deleteImage(this.journey.imageUrl).subscribe(res => {
  //         if(res.success) {
  //           this.flashMessage.show(res.message, {cssClass: 'alert-success', timeout: 5000});
  //           this.router.navigate(['/journeys']);
  //         } else {
  //           this.flashMessage.show(res.message, {cssClass: 'alert-danger', timeout: 5000});
  //         }
  //       });
  //     } else {
  //       this.flashMessage.show(res.message, {cssClass: 'alert-danger', timeout: 5000});
  //     }
  //   });
  // }

  public showConfirm() {
    let disposable = this.dialogService.addDialog(ConfirmComponent, {
      title:'Delete "'+this.journey.title+'"' ,
      message:'Warning! You are about to delete this journey! Click DELETE if you want to delete it.'})
      .subscribe((isConfirmed)=>{
      //We get dialog result
        if(isConfirmed) {
          this.journeysService.deleteJourney(this.journeyId).subscribe(res => {
            if(res.success) {
              this.journeysService.deleteImage(this.journey.imageUrl).subscribe(res => {
                if(res.success) {
                  this.flashMessage.show(res.message, {cssClass: 'alert-success', timeout: 5000});
                  this.router.navigate(['/journeys']);
                } else {
                  this.flashMessage.show(res.message, {cssClass: 'alert-danger', timeout: 5000});
                }
              });
            } else {
              this.flashMessage.show(res.message, {cssClass: 'alert-danger', timeout: 5000});
            }
          });
        } else {
          return false;
        }
      });

    setTimeout(()=>{
      disposable.unsubscribe();
    },10000);
  }

}
