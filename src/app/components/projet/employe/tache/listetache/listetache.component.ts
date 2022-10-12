
  import { Component, OnInit } from '@angular/core';
import { TacheService } from 'src/app/services/tache/tache.service';

  
   
    
    
    @Component({
      selector: 'app-listetache',
      templateUrl: './listetache.component.html',
      styleUrls: ['./listetache.component.css']
    })
    export class ListetacheComponent  implements OnInit {
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
    