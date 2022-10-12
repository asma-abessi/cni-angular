
  import { Component, OnInit } from '@angular/core';
  import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
  
  import { Router } from '@angular/router';
  import { ToastrService } from 'ngx-toastr';
import { TacheService } from 'src/app/services/tache/tache.service';


  
  @Component({
    selector: 'app-ajout-tache',
    templateUrl: './ajout-tache.component.html',
    styleUrls: ['./ajout-tache.component.css']
  })
  export class  AjoutTacheComponent implements OnInit {
    myForm: FormGroup
    constructor(private fb: FormBuilder,private toastr: ToastrService, private as:TacheService) {
      let formcontrols = {
  
        discription: new FormControl('', [Validators.required,
        Validators.pattern("[a-z . '-]+")]
        ),
      
        travail: new FormControl('', [
          Validators.required
        ]),
        
       
      
  
        
      
      }
      this.myForm = this.fb.group(formcontrols);
     }
     get discription() {
      return this.myForm.get('discription')
    }
  
  
    get travail() {
      return this.myForm.get('travail')
    }
    
   
  
    ngOnInit() {
      
    }
  
   
    Demande(){
    let data =this.myForm.value;
    console.log(data);
    this.as.registerDemande(data).subscribe(
      (res)=>{
        this.toastr.success('tache is successfully created', '');
  
        //this.router.navigate(['/signin']);
        console.log(res);
      },
      (err)=>{
        console.log(err) ;
      }
    )
   }
  }
  