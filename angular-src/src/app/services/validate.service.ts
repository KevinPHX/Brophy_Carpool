import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }
validateRegister(user){
  if (user.role == undefined || user.firstname == undefined || user.lastname == undefined || user.email == undefined || user.username == undefined || user.phonenumber == undefined || user.password == undefined || user.address == undefined || user.zipcode == undefined || user.school == undefined){
    return false;
  } else {
    return true;
  }
}
validateUpdate(user){
  if (user.role == undefined || user.firstname == undefined || user.lastname == undefined || user.email == undefined || user.username == undefined || user.phonenumber == undefined || user.address == undefined || user.zipcode == undefined || user.school == undefined){
    return false;
  } else {
    return true;
  }
}
validateEmail(email){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

}
