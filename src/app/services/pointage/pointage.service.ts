import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PointageService {

  url: string;
  constructor(private http:HttpClient) { }



 
  getallpointageurl="http://localhost:8080/api/auth/allPointage";
  getallpointage(){
    return this.http.get<any>(this.getallpointageurl);
  }
 deletepointageurl="http://localhost:8080/api/auth/Pointage";
 deletepointage(id:number){
  return this.http.delete<any>(this.deletepointageurl+"/"+id);
 }
 private getoneprojetUrl="http://localhost:8080/api/auth/onePointage/";
 getoneprojet(id:number){
  return this.http.get<any>(this.getoneprojetUrl+id);
}

  private registerDemandeUrl ="http://localhost:8080/api/auth/addPointage" ;
  registerDemande(pointage){
    return this.http.post<any>(this.registerDemandeUrl ,pointage) ;
  }
 private updatepointageurl="http://localhost:8080/api/auth/updatepoint";
  updatepontage(offre , id:number){
    return this.http.put<any>(this.updatepointageurl+"/"+id,offre) ;
  }




 
}