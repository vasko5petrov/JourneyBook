import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: any;
  constructor(
  	private router: Router,
  	private flashMessage: FlashMessagesService,
  	private authService: AuthService
  	) { }

  ngOnInit() {
    const token = localStorage.getItem('id_token');
    if(token) {
      this.authService.getProfile().subscribe(profile => {
        this.user = profile.user;
      },
      err => {
        console.log(err);
        return false;
      });
    }
  }

  onLogoutClick() {
    this.user = null;
  	this.authService.logout();
  	this.flashMessage.show('You are logged out.', {cssClass: 'alert-success', timeout: 3000});
  	this.router.navigate(['']);
  	return false;
  }

}
