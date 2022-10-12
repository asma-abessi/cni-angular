
 
  import { Component, OnInit } from '@angular/core';
import { CongeService } from 'src/app/services/conge/conge.service';


  @Component({
    selector: 'app-listeconge',
    templateUrl: './listeconge.component.html',
    styleUrls: ['./listeconge.component.css']
  })
  export class ListecongeComponent  implements OnInit {
    peopleList=[]
    constructor(private listprojet:CongeService) { }
  
    ngOnInit(): void {
      this.listprojet.getallconge().subscribe(
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
      this.listprojet.deleteconge(person.id).subscribe(
        res=>{
          console.log(res);
        },
        err =>{
          console.log(err);
        }
      )
    }
  
  }
  