
  import { Component, OnInit } from '@angular/core';
  import{FormGroup , FormControl , FormBuilder , Validators} from'@angular/forms';
  import { ActivatedRoute, Router } from '@angular/router';
import { AvanceService } from 'src/app/services/avance/avance.service';
 
  
  
  @Component({
    selector: 'app-modifier-avance',
    templateUrl: './modifier-avance.component.html',
    styleUrls: ['./modifier-avance.component.css']
  })
  export class ModifierAvanceComponent  implements OnInit {
    updateForm : FormGroup
    constructor(private fb: FormBuilder , private route:ActivatedRoute,private router : Router , private listprojet:AvanceService) {
      let formcontrols = {
        montant: new FormControl('', [Validators.required,
          Validators.pattern("[a-z . '-]+")]
          ),
          discription :new FormControl('', [
          Validators.required
        ]),
        datedemande :new FormControl('', [
        Validators.required
      ]),
      
  
      }
      this.updateForm = this.fb.group(formcontrols); 
     }
     get montant() {
      return this.updateForm.get('montant')
    }
     get discription() {
      return this.updateForm.get('discription')
    }
     get datedemande() {
      return this.updateForm.get('datenaiss')
    }
    
    
  
    ngOnInit(): void {
      let idprojet = this.route.snapshot.params.id;
      console.log(idprojet);
      this.listprojet.getoneprojet(idprojet).subscribe(
        res=>{
          let avance =res ;
          this.updateForm.patchValue({
            montant :avance.montant,
            discription : avance.discription,
            datedemande : avance.datedemande,
            
          })
          console.log(res);
        },
        err=>{
          console.log(err);
        }
      )
      
    }
    updateProjet(){
      let idemploye = this.route.snapshot.params.id;
      console.log(idemploye);
     let data =  this.updateForm.value ;
    // console.log(data);
     this.listprojet.updateavance(data,idemploye).subscribe(
       res=>{
       this.router.navigate(['/homeemploye']);
       console.log(res);
       },
       err=>{
  
       }
     )
  
    }
  
  }
