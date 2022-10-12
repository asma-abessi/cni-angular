
 
  import { Component, OnInit } from '@angular/core';
import { FormationService } from 'src/app/services/formation/formation.service';


 
  
  
  @Component({
    selector: 'app-listeformation',
    templateUrl: './listeformation.component.html',
    styleUrls: ['./listeformation.component.css']
  })
  export class ListeformationComponent  implements OnInit {
    peopleList=[]
    constructor(private listprojet:FormationService) { }
  
    ngOnInit(): void {
      this.listprojet.getallformation().subscribe(
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
      this.listprojet.deleteformation(person.id).subscribe(
        res=>{
          console.log(res);
        },
        err =>{
          console.log(err);
        }
      )
    }
  
  }