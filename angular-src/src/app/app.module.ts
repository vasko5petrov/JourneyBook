import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { JourneysComponent } from './components/journeys/journeys/journeys.component';
import { AddJourneyComponent } from './components/journeys/add-journey/add-journey.component';
import { EditJourneyComponent } from './components/journeys/edit-journey/edit-journey.component';
import { JourneyComponent } from './components/journeys/journey/journey.component';
import { JourneyImageComponent } from './components/journeys/journey-image/journey-image.component';
import { JourneysMapComponent } from './components/journeys-map/journeys-map.component';

import { ConfirmComponent } from './components/modal/confirm-modal.component';
import { LoaderComponent } from './components/loader/loader.component';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { AgmCoreModule } from '@agm/core';
import { Daterangepicker } from 'ng2-daterangepicker';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';

import { JourneysService } from './services/journeys.service';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';

import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'journeys', component: JourneysComponent, canActivate: [AuthGuard]},
  {path: 'journeys/map', component: JourneysMapComponent, canActivate: [AuthGuard]},
	{path: 'add-journey', component: AddJourneyComponent, canActivate: [AuthGuard]},
	{path: 'edit-journey/:id', component: EditJourneyComponent, canActivate: [AuthGuard]},
  {path: 'journeys/:id', component: JourneyComponent, canActivate: [AuthGuard]},
	{path: 'edit-journey/:id/image', component: JourneyImageComponent, canActivate: [AuthGuard]},
	{path: 'users/register', component: RegisterComponent, canActivate: [AuthGuard]},
	{path: 'users/login', component: LoginComponent, canActivate: [AuthGuard]},
	{path: '*', redirectTo: ''}
];

@Pipe({
	name: 'orderBy'
})

export class OrderBy{

 transform(array, orderBy, asc = true){

     if (!orderBy || orderBy.trim() == ""){
       return array;
     }

     //ascending
     if (asc){
       return Array.from(array).sort((item1: any, item2: any) => {
         return this.orderByComparator(item1[orderBy], item2[orderBy]);
       });
     }
     else{
       //not asc
       return Array.from(array).sort((item1: any, item2: any) => {
         return this.orderByComparator(item2[orderBy], item1[orderBy]);
       });
     }

 }

 orderByComparator(a:any, b:any):number{

     if((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))){
       //Isn't a number so lowercase the string to properly compare
       if(a.toLowerCase() < b.toLowerCase()) return -1;
       if(a.toLowerCase() > b.toLowerCase()) return 1;
     }
     else{
       //Parse strings as numbers to compare properly
       if(parseFloat(a) < parseFloat(b)) return -1;
       if(parseFloat(a) > parseFloat(b)) return 1;
      }

     return 0; //equal each other
 }
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    JourneysComponent,
    AddJourneyComponent,
    JourneyComponent,
    EditJourneyComponent,
		JourneyImageComponent,
		ConfirmComponent,
		JourneysMapComponent,
		LoaderComponent,
		RegisterComponent,
		LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCmzwn1Ap8Y9_Zso9ee5iJ8OiHFXTKfR5c',
      libraries: ["places"]
    }),
		Daterangepicker,
		BootstrapModalModule,
		Ng2OrderModule,
		NgxPaginationModule
  ],
  providers: [
    JourneysService,
    ValidateService,
		AuthService,
		AuthGuard
  ],
	entryComponents: [
    ConfirmComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
