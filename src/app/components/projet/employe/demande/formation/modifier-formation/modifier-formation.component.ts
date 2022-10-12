


  
  import { Component, OnInit } from '@angular/core';
  import{FormGroup , FormControl , FormBuilder , Validators} from'@angular/forms';
  import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from 'src/app/services/formation/formation.service';

 
  
  
  @Component({
    selector: 'app-modifier-formation',
    templateUrl: './modifier-formation.component.html',
    styleUrls: ['./modifier-formation.component.css']
  })
  export class ModifierFormationComponent  implements OnInit {
    updateForm : FormGroup
    constructor(private fb: FormBuilder , private route:ActivatedRoute,private router : Router , private listprojet:FormationService) {
      let formcontrols = {
        theme: new FormControl('', [Validators.required,
          Validators.pattern("[a-z . '-]+")]
          ),
         datedeb :new FormControl('', [
          Validators.required
        ]),
        niveau :new FormControl('', [
        Validators.required
      ]),
      
  
      }
      this.updateForm = this.fb.group(formcontrols); 
     }
     get theme() {
      return this.updateForm.get('theme')
    }
     get discription() {
      return this.updateForm.get('datedeb')
    }
     get datedemande() {
      return this.updateForm.get('datefin')
    }
    
    
  
    ngOnInit(): void {
      let idprojet = this.route.snapshot.params.id;
      console.log(idprojet);
      this.listprojet.getoneprojet(idprojet).subscribe(
        res=>{
          let formation =res ;
          this.updateForm.patchValue({
            theme :formation.theme,
            datedeb : formation.datedeb,
            niveau : formation.niveau,
            
          })
          console.log(res);
        },
        err=>{
          console.log(err);
        }
      )
      
    }
  
  }