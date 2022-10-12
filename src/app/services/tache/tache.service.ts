import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  url: string;
  constructor(private http:HttpClient) { }



 
  getalltacheurl="http://localhost:8080/api/auth/allTache";
  getalltache(){
    return this.http.get<any>(this.getalltacheurl);
  }
 deletetacheurl="http://localhost:8080/api/auth/Tache";
 deletetache(id:number){
  return this.http.delete<any>(this.deletetacheurl+"/"+id);
 }
 private getonetacheUrl="http://localhost:8080/api/auth/Tache/";
 getonetache(id:number){
  return this.http.get<any>(this.getonetacheUrl+id);
}
private updatetacheurl ="http://localhost:8080/api/auth/upTache";
updatetache(tache , id:number){
  return this.http.put<any>(this.updatetacheurl+"/"+id,tache) ;
}
  private registerDemandeUrl ="http://localhost:8080/api/auth/addTache" ;
  registerDemande(tache){
    return this.http.post<any>(this.registerDemandeUrl ,tache) ;
  }






 
}
