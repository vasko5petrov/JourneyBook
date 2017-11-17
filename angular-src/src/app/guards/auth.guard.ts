import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
	constructor(private authService: AuthService, private router: Router) {

	}

  route: any;

	canActivate(path) {
		// var route = path.url[0].path;
		// if(this.authService.loggedIn() && route == 'profile' || this.authService.loggedIn() && route == 'dashboard' || this.authService.loggedIn() && route == 'chat') {
		// 	return true;
		// } else if(!this.authService.loggedIn() && route == 'login' || !this.authService.loggedIn() && route == 'register') {
		// 	return true;
		// } else if(this.authService.loggedIn() && route == 'login' || this.authService.loggedIn() && route == 'register') {
		// 	this.router.navigate(['/dashboard']);
		// 	return false;
		// } else {
		// 	this.router.navigate(['/login']);
		// 	return false;
		// }
    if(path.url.length > 1) {
      this.route = '';
      for(let i = 0; i < path.url.length; i++) {
        if((path.url.length - i) > 1) {
          this.route += path.url[i].path + '/';
        }
        if((path.url.length - i) == 1) {
          this.route += path.url[i].path;
        }
      }
    } else {
      this.route = path.url[0].path;
    }

    if(this.authService.loggedIn() && this.route == 'journeys' || this.authService.loggedIn() && this.route == 'journeys/map' || this.authService.loggedIn() && this.route == 'add-journey' || this.authService.loggedIn() && this.route == 'edit-journey/'+path.url[1].path  || this.authService.loggedIn() && this.route == 'journeys/' +path.url[1].path || this.authService.loggedIn() && this.route == 'edit-journey/'+path.url[1].path+'/image') {
      return true;
    } else if(!this.authService.loggedIn() && this.route == 'users/login' || !this.authService.loggedIn() && this.route == 'users/register') {
      return true;
    } else if(this.authService.loggedIn() && this.route == 'users/login' || this.authService.loggedIn() && this.route == 'users/register') {
			this.router.navigate(['/journeys']);
      return false;
    } else {
      this.router.navigate(['']);
      return false;
    }
	}

}
