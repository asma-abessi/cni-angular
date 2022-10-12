

  import { Component, OnInit } from '@angular/core';
import { SuperviseurService } from 'src/app/services/superviseur/superviseur.service';



@Component({
  selector: 'app-listesuperviseur',
  templateUrl: './listesuperviseur.component.html',
  styleUrls: ['./listesuperviseur.component.css']
})
export class ListesuperviseurComponent  implements OnInit {
  peopleList=[]
  constructor(private listprojet:SuperviseurService) { }

  ngOnInit(): void {
    this.listprojet.getallsuperviseur().subscribe(
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
    this.listprojet.deletesuperviseur(person.id).subscribe(
      res=>{
        console.log(res);
      },
      err =>{
        console.log(err);
      }
    )
  }

}
