import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JourneysService {
  authToken: any;

  constructor(private http: Http) { }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  getJourneys() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/api/journeys', {headers: headers})
      .map(res => res.json());
  }

  getJourneysByQuery(query) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/api/journeys/search/' + query, {headers: headers})
      .map(res => res.json());
  }

  addJourney(journey) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/journeys/add', journey, {headers: headers})
      .map(res => res.json());
  }

  editJourney(journey) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/journeys/'+journey.id+'/edit', journey, {headers: headers})
      .map(res => res.json());
  }

  uploadImage(image) {
  	// let input = new FormData();
  	// input.append('imageFile', image);
  	// return this.http.post("http://localhost:3000/images/upload", image);
  	let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });
		let formData: FormData = new FormData();
    formData.append('imageFile', image);
    return this.http.post('http://localhost:3000/api/images/upload', formData, options)
        .map(res => res.json());
  }

  deleteImage(imageName) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.delete('http://localhost:3000/api/images/delete/'+imageName, {headers: headers})
      .map(res => res.json());
  }

  getJourney(id) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/api/journeys/'+id, {headers: headers})
      .map(res => res.json());
  }

  deleteJourney(id) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.delete('http://localhost:3000/api/journeys/delete/'+id, {headers: headers})
      .map(res => res.json());
  }
}
