import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router,private loginService:LoginService) { }

  ngOnInit() {


   }

  isLogged(){
    return this.loginService.isLoggedIn();
  }

  isAdmin(){
    return this.loginService.isLoggedAdmin()
  }

  logout(){
    localStorage.removeItem("Authorization");
    this.router.navigate(['/login']);
  }

  isActivated(){
    return this.loginService.isActivated();
  }

}
