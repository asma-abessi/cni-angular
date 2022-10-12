

  
  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from '@angular/common/http';
  
  @Injectable({
    providedIn: 'root'
  })
  export class FormationService {
  
    url: string;
    constructor(private http:HttpClient) { }
  
  
  
   
    getallformationurl="http://localhost:8080/api/auth/allFormation";
    getallformation(){
      return this.http.get<any>(this.getallformationurl);
    }
   deleteformationurl="http://localhost:8080/api/auth/Formation";
   deleteformation(id:number){
    return this.http.delete<any>(this.deleteformationurl+"/"+id);
   }
   private getoneprojetUrl="http://localhost:8080/api/auth/Formation/";
   getoneprojet(id:number){
    return this.http.get<any>(this.getoneprojetUrl+id);
  }
  
    private registerDemandeUrl ="http://localhost:8080/api/auth/addFormation" ;
    registerDemande(formation){
      return this.http.post<any>(this.registerDemandeUrl ,formation) ;
    }
  
  
  
  
  
   
  }
  
  