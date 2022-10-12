

 

 import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'src/app/services/employe/employe.service';


@Component({
  selector: 'app-listeemploye',
  templateUrl: './listeemploye.component.html',
  styleUrls: ['./listeemploye.component.css']
})
export class ListeemployeComponent  implements OnInit {
  peopleList=[]
  constructor(private listprojet:EmployeService) { }

  ngOnInit(): void {
    this.listprojet.getallemployer().subscribe(
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
    this.listprojet.deleteemployer(person.id).subscribe(
      res=>{
        console.log(res);
      },
      err =>{
        console.log(err);
      }
    )
  }

}
