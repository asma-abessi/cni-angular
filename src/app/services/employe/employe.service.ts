import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { employe } from 'src/app/models/employe-modele';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  url: string;
  constructor(private http:HttpClient) { }




  getallemployerurl="http://localhost:8080/api/auth/allEmploye";
  getallemployer(){
    return this.http.get<any>(this.getallemployerurl);
  }
 deleteemployerurl="http://localhost:8080/api/auth/Employe";
 deleteemployer(id:number){
  return this.http.delete<any>(this.deleteemployerurl+"/"+id);
 }
 private getoneprojetUrl="http://localhost:8080/api/auth/Employe/";
 getoneprojet(id:number){
  return this.http.get<any>(this.getoneprojetUrl+id);
}

  private registerUserUrl ="http://localhost:8080/api/auth/addEmploye" ;
  registerUser(user){
    return this.http.post<any>(this.registerUserUrl ,user) ;
  }
 
   private updateemplurl="http://localhost:8080/api/auth/update" ;
updateprojet(projet , id :number){
  return this.http.put<any>(this.updateemplurl+"/"+id,projet) ;
}

getEmployeeById(id:any):Observable<any>{
  return this.http.get<any>("http://localhost:8080/api/auth/Employe/"+id);
  }


 
}
