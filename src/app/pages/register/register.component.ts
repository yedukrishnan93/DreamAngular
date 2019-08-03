import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
username:string;
mailid:string;
password:string;
responseFlag:boolean = false;
  constructor(private registerService:RegisterService,private router:Router) { }

  ngOnInit() {
  }
  regiter(){
    console.log("working",this.username,this.password,this.mailid);
      this.registerService.addUser(this.username,this.mailid,this.password).subscribe(data =>{
        console.log("response data",data);  
        
        if(data.msg == "added  successfully"){
          this.responseFlag = true;
        }
      })
  }

}
