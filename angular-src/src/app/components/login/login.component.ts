import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { FlashMessagesService } from 'angular2-flash-messages';

import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	username: String;
	password: String;

  constructor(
  	private router: Router,
  	private flashMessage: FlashMessagesService,
  	private validateService: ValidateService,
  	private authService: AuthService
  	) { }

  ngOnInit() {
  }

  onLoginSubmit() {
  	const user = {
  		username: this.username,
  		password: this.password
  	}

  	if(!this.validateService.validateLogin(user)) {
  		this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
  		return false;
  	}

  	this.authService.authenticateUser(user).subscribe(data => {
  		if(data.success) {
  			this.authService.storeUserData(data.token, data.user);
  			this.flashMessage.show('Welcome ' + data.user.name + '. You are now logged in', {cssClass: 'alert-success', timeout: 5000});
        window.location.reload();
  			this.router.navigate(['/journeys']);
  		} else {
  			this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
  			this.router.navigate(['users/login']);
  		}
  	});
  }

}
