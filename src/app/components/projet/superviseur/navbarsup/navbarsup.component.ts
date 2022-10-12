import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbarsup',
  templateUrl: './navbarsup.component.html',
  styleUrls: ['./navbarsup.component.css']
})
export class NavbarsupComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem("myToken");
    this.router.navigate(['/sign']);
  }
}
