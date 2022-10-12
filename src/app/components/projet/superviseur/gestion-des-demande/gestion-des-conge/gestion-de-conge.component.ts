
  import { Component, OnInit } from '@angular/core';
  import { CongeService } from 'src/app/services/conge/conge.service';
import Swal from 'sweetalert2';
  
  
    @Component({
      selector: 'app-gestion-de-conge',
      templateUrl: './gestion-de-conge.component.html',
      styleUrls: ['./gestion-de-conge.component.css']
    })
    export class GestionDeCongeComponent  implements OnInit {
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
    