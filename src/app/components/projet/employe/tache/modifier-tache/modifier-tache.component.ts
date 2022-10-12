
  import { Component, OnInit } from '@angular/core';
  import{FormGroup , FormControl , FormBuilder , Validators} from'@angular/forms';
  import { ActivatedRoute, Router } from '@angular/router';
import { TacheService } from 'src/app/services/tache/tache.service';
 
  
  
  @Component({
    selector: 'app-modifier-tache',
    templateUrl: './modifier-tache.component.html',
    styleUrls: ['./modifier-tache.component.css']
  })
  export class ModifierTacheComponent  implements OnInit {
    updateForm : FormGroup
    constructor(private fb: FormBuilder , private route:ActivatedRoute,private router : Router , private listprojet:TacheService) {
      let formcontrols = {
        travail: new FormControl('', [Validators.required,
          Validators.required]
          ),
          discription:new FormControl('', [
          Validators.required
        ]),
       
      
  
      }
      this.updateForm = this.fb.group(formcontrols); 
     }
     get travail() {
      return this.updateForm.get('travail')
    }
     get discription() {
      return this.updateForm.get('discription')
    }
     
    
    
  
    ngOnInit(): void {
      let idprojet = this.route.snapshot.params.id;
      console.log(idprojet);
      this.listprojet.getonetache(idprojet).subscribe(
        res=>{
          let tache =res ;
          this.updateForm.patchValue({
            travail:tache.travail,
            discription: tache.discription,
            
            
          })
          console.log(res);
        },
        err=>{
          console.log(err);
        }
      )
      
    }
    updatetache(){
      let idemploye = this.route.snapshot.params.id;
      console.log(idemploye);
     let data =  this.updateForm.value ;
    // console.log(data);
     this.listprojet.updatetache(data,idemploye).subscribe(
       res=>{
       this.router.navigate(['/homeemploye']);
       console.log(res);
       },
       err=>{
  
       }
     )
  
    }
  }
