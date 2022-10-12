
  import { Component, OnInit } from '@angular/core';
import { PointageService } from 'src/app/services/pointage/pointage.service';

  
    
     
      
      
      @Component({
        selector: 'app-listepointage',
        templateUrl: './listepointage.component.html',
        styleUrls: ['./listepointage.component.css']
      })
      export class ListepointageComponent  implements OnInit {
        peopleList=[]
        constructor(private listprojet:PointageService) { }
      
        ngOnInit(): void {
          this.listprojet.getallpointage().subscribe(
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
          this.listprojet.deletepointage(person.id).subscribe(
            res=>{
              console.log(res);
            },
            err =>{
              console.log(err);
            }
          )
        }
      
      }
      