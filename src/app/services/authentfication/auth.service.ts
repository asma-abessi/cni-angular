import { Injectable } from '@angular/core';
import{HttpClient} from"@angular/common/http" ;
import { JwtHelperService } from "@auth0/angular-jwt";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;

  private loginurl="http://localhost:8080/api/auth/signin";
  constructor(private http :HttpClient) { }
  loginUser(user){
    return this.http.post<any>(this.loginurl ,user) ;
  }
  isLoggedIn(){
    let token = localStorage.getItem("Authorization");
    if (token) {
      return true;
    }
    return false;
  }

  isLoggedAdmin(){
    let token = localStorage.getItem("myToken");
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    
    let roles = decodedToken.roles;
   
       if (roles== "[ROLE_chefgeneral]")
      {
        return true;
      }else {
          return false;

      }
       
  }

  isActivated(){
    let token = localStorage.getItem("Authorization");
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    let etat = decodedToken.etat;
    return etat;
  }




  logout(){
    this._isLoggedIn$.next(false);
    this.router.navigate(['/sign']);                  
  }
}
