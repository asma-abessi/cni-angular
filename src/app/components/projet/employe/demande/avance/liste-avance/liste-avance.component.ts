

 
  import { Component, OnInit } from '@angular/core';
import { AvanceService } from 'src/app/services/avance/avance.service';

 
  
  
  @Component({
    selector: 'app-liste-avance',
    templateUrl: './liste-avance.component.html',
    styleUrls: ['./liste-avance.component.css']
  })
  export class ListeAvanceComponent  implements OnInit {
    peopleList=[]
    constructor(private listprojet:AvanceService) { }
  
    ngOnInit(): void {
      this.listprojet.getallavance().subscribe(
        result=>{
          this.peopleList = result 
          console.log(result);
        },
        error=>{
         console.log(error);
        }
      )
    }
    delete(person){
    
      let index =this.peopleList.indexOf(person);
      this.peopleList.splice(index,1);
      this.listprojet.deleteavance(person.id).subscribe(
        res=>{
          console.log(res);
        },
        err =>{
          console.log(err);
        }
      )
    }
  
  }
  