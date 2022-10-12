import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CongeService {

  url: string;
  constructor(private http:HttpClient) { }



 
  getallcongeurl="http://localhost:8080/api/auth/allConge";
  getallconge(){
    return this.http.get<any>(this.getallcongeurl);
  }
 deletecongeurl="http://localhost:8080/api/auth/Conge";
 deleteconge(id:number){
  return this.http.delete<any>(this.deletecongeurl+"/"+id);
 }
 private getoneprojetUrl="http://localhost:8080/api/auth/Conge/";
 getoneprojet(id:number){
  return this.http.get<any>(this.getoneprojetUrl+id);
}

  private registerDemandeUrl ="http://localhost:8080/api/auth/addConge" ;
  registerDemande(conge){
    return this.http.post<any>(this.registerDemandeUrl ,conge) ;
  }





  
}
