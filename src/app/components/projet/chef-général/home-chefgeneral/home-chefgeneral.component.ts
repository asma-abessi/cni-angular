import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentfication/auth.service';

@Component({
  selector: 'app-home-chefgeneral',
  templateUrl: './home-chefgeneral.component.html',
  styleUrls: ['./home-chefgeneral.component.css']
})
export class HomeChefgeneralComponent implements OnInit {
  authService: any;
  tokenStorageService: any;

  constructor(private router: Router , private loginService : AuthService) { }

  ngOnInit() {
  }
  isLogged(){
    return this.loginService.isLoggedIn();
  }

  isAdmin(){
    return this.loginService.isLoggedAdmin()
  }

  logout(){
    localStorage.removeItem("myToken");
    this.router.navigate(['/sign']);
  }

  isActivated(){
    return this.loginService.isActivated();
  }

}
