import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-superviseur',
  templateUrl: './home-superviseur.component.html',
  styleUrls: ['./home-superviseur.component.css']
})
export class HomeSuperviseurComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem("myToken");
    this.router.navigate(['/sign']);
  }
}
