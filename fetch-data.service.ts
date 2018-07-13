import { Injectable } from '@angular/core';

@Injectable()
export class FetchDataService {
  isAuthenticated:boolean = false;
   userAuthentication(username: string,password:string) {
     console.log("check the username-->"+username);
     console.log("check the username-->"+password);
     this.isAuthenticated = username === "admin" && password === "pass";
     return this.isAuthenticated;
   }
  
   clear() {
   }
  constructor() { }
  
}
