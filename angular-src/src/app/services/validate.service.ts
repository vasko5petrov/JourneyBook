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

}
