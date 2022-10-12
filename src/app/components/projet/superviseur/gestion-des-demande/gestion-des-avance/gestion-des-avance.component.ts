
  

 
  import { Component, OnInit } from '@angular/core';
import { AvanceService } from 'src/app/services/avance/avance.service';

 
  
  
  @Component({
    selector: 'app-gestion-des-avance',
    templateUrl: './gestion-des-avance.component.html',
    styleUrls: ['./gestion-des-avance.component.css']
  })
  export class GestionDesAvanceComponent  implements OnInit {
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
  