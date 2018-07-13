import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  isAuthCheck:any;

  constructor(private fetchDataService:FetchDataService,private router: Router) { }

  ngOnInit() {
    

  }
  //ngAfterViewInit() {
    //(window as any).initialize();
  //}

  login(){
    //console.log(`email: ${this.email} password: ${this.password}`)
    //alert(`Email: ${this.email} Password: ${this.password}`)
    console.log("username-->",this.email);
    console.log("password-->",this.password);
    this.isAuthCheck = this.fetchDataService.userAuthentication(this.email,this.password);
    if(this.isAuthCheck){
      this.router.navigate(['registrationForm']);
    }else{
      alert("Authentication failed-->");
    }
    //console.log("this.isAuthCheck in component-->",this.isAuthCheck);
    //this.router.navigate(['registrationForm']);
  }
}
