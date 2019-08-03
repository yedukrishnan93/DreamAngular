import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:any;
  password:any;
  formdata = new FormData;
  loginForm:FormGroup;
  constructor(private router:Router,
    private authSvc:AuthenticationService) {
      this.loginForm = new FormGroup({
        username:new FormControl("",Validators.required),
        password:new FormControl("",Validators.required)
      })
     }

  ngOnInit() {
  }
  authentication() {
    //this.router.navigateByUrl('userHome');
    this.formdata.append("username",this.username);
    this.formdata.append("password",this.password);
    console.log("component");
   // this.authSvc.authenticationSvc(this.formdata);
   this.router.navigateByUrl("userHome")
  }

}
