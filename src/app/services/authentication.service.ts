import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
baseUrl="http://localhost:3200/api/user"
  constructor(private http:HttpClient) { }
  authenticationSvc(formdata) {
    console.log('Service');
    this.http.post(this.baseUrl,formdata).subscribe(data =>{
      console.log(data);
      
    },err =>{
      console.log(err)
    })
  }
}
