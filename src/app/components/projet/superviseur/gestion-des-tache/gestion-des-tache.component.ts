
  
  import { Component, OnInit } from '@angular/core';
import { TacheService } from 'src/app/services/tache/tache.service';

  
   
    
    
    @Component({
      selector: 'app-gestion-des-tache',
      templateUrl: './gestion-des-tache.component.html',
      styleUrls: ['./gestion-des-tache.component.css']
    })
    export class GestionDesTacheComponent  implements OnInit {
      peopleList=[]
      constructor(private listprojet:TacheService) { }
    
      ngOnInit(): void {
        this.listprojet.getalltache().subscribe(
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
        this.listprojet.deletetache(person.id).subscribe(
          res=>{
            console.log(res);
          },
          err =>{
            console.log(err);
          }
        )
      }
    
    }