import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { ConfirmComponent } from './components/modal/confirm-modal.component';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { AgmCoreModule } from '@agm/core';
import { Daterangepicker } from 'ng2-daterangepicker';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';

import { JourneysService } from './services/journeys.service';
import { ValidateService } from './services/validate.service';

const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'journeys', component: JourneysComponent},
	{path: 'add-journey', component: AddJourneyComponent},
	{path: 'edit-journey/:id', component: EditJourneyComponent},
  {path: 'journeys/:id', component: JourneyComponent},
	{path: '*', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    JourneysComponent,
    AddJourneyComponent,
    JourneyComponent,
    EditJourneyComponent,
		ConfirmComponent
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
		BootstrapModalModule
  ],
  providers: [
    JourneysService,
    ValidateService,
  ],
	entryComponents: [
    ConfirmComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
