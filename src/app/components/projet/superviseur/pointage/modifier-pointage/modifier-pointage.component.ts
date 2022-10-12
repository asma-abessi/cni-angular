
  import { Component, OnInit } from '@angular/core';
  import{FormGroup , FormControl , FormBuilder , Validators} from'@angular/forms';
  import { ActivatedRoute, Router } from '@angular/router';

import { PointageService } from 'src/app/services/pointage/pointage.service';
 
  
  
  @Component({
    selector: 'app-modifier-pointage',
    templateUrl: './modifier-pointage.component.html',
    styleUrls: ['./modifier-pointage.component.css']
  })
  export class ModifierPointageComponent  implements OnInit {
    updateForm : FormGroup
    constructor(private fb: FormBuilder , private route:ActivatedRoute,private router : Router , private listprojet:PointageService) {
      let formcontrols = {
        present: new FormControl('', [Validators.required,
          Validators.pattern("[a-z . '-]+")]
          ),
          datedeb :new FormControl('', [
          Validators.required
        ]),
     
        datefin :new FormControl('', [
          Validators.required
        ]),
        nbheure :new FormControl('', [
          Validators.required
        ]),
      }
      this.updateForm = this.fb.group(formcontrols); 
     }
     get present() {
      return this.updateForm.get('present')
    }
     get datedeb() {
      return this.updateForm.get('datedeb')
    }
    get datefin() {
      return this.updateForm.get('datefin')
    } 
    
    get nbheure() {
      return this.updateForm.get('nbheure')
    }
  
    ngOnInit(): void {
      let idprojet = this.route.snapshot.params.id;
      console.log(idprojet);
      this.listprojet.getoneprojet(idprojet).subscribe(
        res=>{
          let pointage =res ;
          this.updateForm.patchValue({
            present:pointage. present,
            datedeb:pointage.datedeb,
            datefin:pointage.datefin,
            nbheure:pointage.nbheure,

           
          })
          console.log(res);
        },
        err=>{
          console.log(err);
        }
      )
      
    }
    updateProjet(){
      let idprojet = this.route.snapshot.params.id;
      console.log(idprojet);
     let data =  this.updateForm.value ;
    // console.log(data);
     this.listprojet.updatepontage(data,idprojet).subscribe(
       res=>{
       this.router.navigate(['/homesuperviseur']);
       console.log(res);
       },
       err=>{
  
       }
     )
  
    }
  
  }
