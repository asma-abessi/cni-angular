import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-employe',
  templateUrl: './home-employe.component.html',
  styleUrls: ['./home-employe.component.css']
})
export class HomeEmployeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem("myToken");
    this.router.navigate(['/sign']);
  }
}
