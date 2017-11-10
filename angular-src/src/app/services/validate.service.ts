import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateImage(res) {
  	if(res.message.code == "LIMIT_FILE_SIZE") {
  		return false;
  	} else {
  		return true;
  	}
  }

  checkJourneyRequiredFields(data) {
    if(data.title === '' || data.title === undefined || data.location === '' || data.location === undefined || data.duration.days === '' || data.duration.days === undefined) {
      return false;
    }
    return true;
  }

  validateRegister(user) {
  	if(user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
  		return false;
  	} else {
  		return true;
  	}
  }

  validateEmail(email) {
  	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validateLogin(user) {
    if(user.username == undefined || user.password == undefined) {
      return false;
    } else {
      return true;
    }
  }

}
