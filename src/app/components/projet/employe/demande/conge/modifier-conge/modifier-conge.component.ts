

  import { Component, OnInit } from '@angular/core';
  import{FormGroup , FormControl , FormBuilder , Validators} from'@angular/forms';
  import { ActivatedRoute, Router } from '@angular/router';
import { CongeService } from 'src/app/services/conge/conge.service';

 
  
  
  @Component({
    selector: 'app-modifier-conge',
    templateUrl: './modifier-conge.component.html',
    styleUrls: ['./modifier-conge.component.css']
  })
  export class ModifierCongeComponent  implements OnInit {
    updateForm : FormGroup
    constructor(private fb: FormBuilder , private route:ActivatedRoute,private router : Router , private listprojet:CongeService) {
      let formcontrols = {
        datedeb: new FormControl('', [Validators.required,
          Validators.pattern("[a-z . '-]+")]
          ),
          datefin :new FormControl('', [
          Validators.required
        ]),
        type :new FormControl('', [
        Validators.required
      ]),
      
  
      }
      this.updateForm = this.fb.group(formcontrols); 
     }
     get datedeb() {
      return this.updateForm.get('datedeb')
    }
     get discription() {
      return this.updateForm.get('datefin')
    }
     get datedemande() {
      return this.updateForm.get('type')
    }
    
    
  
    ngOnInit(): void {
      let idprojet = this.route.snapshot.params.id;
      console.log(idprojet);
      this.listprojet.getoneprojet(idprojet).subscribe(
        res=>{
          let conge =res ;
          this.updateForm.patchValue({
            datedeb :conge.datedeb,
            datefin : conge.datefin,
            type : conge.type,
            
          })
          console.log(res);
        },
        err=>{
          console.log(err);
        }
      )
      
    }
  
  }

  