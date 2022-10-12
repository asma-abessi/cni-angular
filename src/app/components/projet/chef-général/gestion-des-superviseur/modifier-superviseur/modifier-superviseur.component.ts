
 import { Component, OnInit } from '@angular/core';
 import{FormGroup , FormControl , FormBuilder , Validators} from'@angular/forms';
 import { ActivatedRoute, Router } from '@angular/router';
import { SuperviseurService } from 'src/app/services/superviseur/superviseur.service';
 
 
 
 @Component({
   selector: 'app-modifier-superviseur',
   templateUrl: './modifier-superviseur.component.html',
   styleUrls: ['./modifier-superviseur.component.css']
 })
 export class ModifierSuperviseurComponent  implements OnInit {
   updateForm : FormGroup
   constructor(private fb: FormBuilder , private route:ActivatedRoute,private router : Router , private listprojet:SuperviseurService) {
     let formcontrols = {
       nom: new FormControl('', [Validators.required,
         Validators.pattern("[a-z . '-]+")]
         ),
         prenom :new FormControl('', [
         Validators.required
       ]),
       datenaiss :new FormControl('', [
       Validators.required
     ]),
     adresse :new FormControl('', [
     Validators.required
   ]),
   salaire :new FormControl('', [
   Validators.required
 ]),
 telphone :new FormControl('', [
 Validators.required
 ]),
 
     }
     this.updateForm = this.fb.group(formcontrols); 
    }
    get nom() {
     return this.updateForm.get('nom')
   }
    get prenom() {
     return this.updateForm.get('prenom')
   }
    get datenaiss() {
     return this.updateForm.get('datenaiss')
   }
    get adresse() {
     return this.updateForm.get('adresse')
   }
    get salaire() {
     return this.updateForm.get('salaire')
   }
    get telphone() {
     return this.updateForm.get('telphone')
   }
   
 
   ngOnInit(): void {
     let idprojet = this.route.snapshot.params.id;
     console.log(idprojet);
     this.listprojet.getoneprojet(idprojet).subscribe(
       res=>{
         let superviseur =res ;
         this.updateForm.patchValue({
           nom :superviseur.nom,
           prenom : superviseur.prenom,
           datenaiss : superviseur.datenaiss,
           adresse :superviseur. adresse,  
           salaire :superviseur.salaire,
           telphone:superviseur.telphone
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
   this.listprojet.updatesup(data,idemploye).subscribe(
     res=>{
     this.router.navigate(['/homechef']);
     console.log(res);
     },
     err=>{

     }
   )

  }

 }
 