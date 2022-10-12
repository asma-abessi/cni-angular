import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navabaremp',
  templateUrl: './navabaremp.component.html',
  styleUrls: ['./navabaremp.component.css']
})
export class NavabarempComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem("myToken");
    this.router.navigate(['/sign']);
  }
}
