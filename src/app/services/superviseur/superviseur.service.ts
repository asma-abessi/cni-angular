import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuperviseurService {

  url: string;
  constructor(private http:HttpClient) { }

 

 
   
  getallsuperviseururl="http://localhost:8080/api/auth/allSuperviseur";
  getallsuperviseur(){
    return this.http.get<any>(this.getallsuperviseururl);
  }
 deletesuperviseururl="http://localhost:8080/api/auth/Superviseur";
 deletesuperviseur(id:number){
  return this.http.delete<any>(this.deletesuperviseururl+"/"+id);
 }
 private getoneprojetUrl="http://localhost:8080/api/auth/Superviseur/";
 getoneprojet(id:number){
  return this.http.get<any>(this.getoneprojetUrl+id);
}

  private registerUserUrl ="http://localhost:8080/api/auth/addSuperviseur" ;
  registerUser(user){
    return this.http.post<any>(this.registerUserUrl ,user) ;
  }
  private updatesupurl="http://localhost:8080/api/auth/updatesup" ;
  updatesup(projet , id :number){
    return this.http.put<any>(this.updatesupurl+"/"+id,projet) ;
  }
 




  
}
