import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl="http://localhost:3000/api/adduser"

  constructor(private http:HttpClient) { }

  addUser(username,mailid,password):Observable<any>{
    var userData = {
      username:username,
      email:mailid,
      password:password
    }
    var headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post(this.baseUrl,userData)
  }
}
