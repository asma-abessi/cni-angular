import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AvanceService {

  url: string;
  constructor(private http:HttpClient) { }

 

 
  getallavanceurl="http://localhost:8080/api/auth/allAvance";
  getallavance(){
    return this.http.get<any>(this.getallavanceurl);
  }
 deleteavanceurl="http://localhost:8080/api/auth/Avance";
 deleteavance(id:number){
  return this.http.delete<any>(this.deleteavanceurl+"/"+id);
 }
 private getoneprojetUrl="http://localhost:8080/api/auth/Avance/";
 getoneprojet(id:number){
  return this.http.get<any>(this.getoneprojetUrl+id);
}

  private registerDemandeUrl ="http://localhost:8080/api/auth/addAvance" ;
  registerDemande(avance){
    return this.http.post<any>(this.registerDemandeUrl ,avance) ;
  }

  private updateavanceurl="http://localhost:8080/api/auth/avance" ;
  updateavance(projet , id :number){
    return this.http.put<any>(this.updateavanceurl+"/"+id,projet) ;
  }



  

 
}
