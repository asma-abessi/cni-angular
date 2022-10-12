import { Component, OnInit } from '@angular/core';
import { AvanceService } from 'src/app/services/avance/avance.service';
import { CongeService } from 'src/app/services/conge/conge.service';
import { FormationService } from 'src/app/services/formation/formation.service';
import { TacheService } from 'src/app/services/tache/tache.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  avance=[];
  conge=[];
  formation=[];
  tache=[];
  constructor(
    private avanceService:AvanceService,
    private congeService:CongeService,
    private formationService:FormationService,
    private tacheService:TacheService,
  ) { }

  ngOnInit() {
    let token = localStorage.getItem("Authorization");

   /* this.avanceService.allAvance(token).subscribe(
      res=>this.avance=res,
      error=>console.log(error)
    );*/
    /*this.congeService.allConge(token).subscribe(
      res=>this.conge=res,
      error=>console.log(error)
    );
     this.formationService.allFormation(token).subscribe(
      res=>this.formation=res,
      error=>console.log(error)
    );
    this.tacheService.allTache(token).subscribe(
      res=>this.tache=res,
      error=>console.log(error)
    );
    */

  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  
  public barChartLabels = [
    '2006', '2007', '2008', '2009', '2010', '2011', '2012'
  ];
  
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

}
