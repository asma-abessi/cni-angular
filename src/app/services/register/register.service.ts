import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private registerUserUrl ="http://localhost:8080/api/auth/signup" ;
  private loginurl="http://localhost:8080/api/auth/signin";
  constructor(private http :HttpClient) { }
  registerUser(user){
    return this.http.post<any>(this.registerUserUrl ,user) ;
  }
  loginUser(user){
    return this.http.post<any>(this.loginurl ,user) ;
  }
}
