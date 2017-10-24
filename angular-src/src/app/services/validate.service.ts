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

}
