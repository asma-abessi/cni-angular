

  
  import { Component, OnInit } from '@angular/core';
  import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
  
  import { Router } from '@angular/router';
  import { ToastrService } from 'ngx-toastr';
import { FormationService } from 'src/app/services/formation/formation.service';


  
  @Component({
    selector: 'app-formation',
    templateUrl: './formation.component.html',
    styleUrls: ['./formation.component.css']
  })
  export class  FormationComponent implements OnInit {
    myForm: FormGroup
    constructor(private fb: FormBuilder,private toastr: ToastrService, private as:FormationService) {
      let formcontrols = {
             
        datedeb: new FormControl('', [
          Validators.required
        ]),

        theme: new FormControl('', [
          Validators.required
        ]),
      
        niveau: new FormControl('', [
          Validators.required
        ])
        
        
      
  
        
      
      }
      this.myForm = this.fb.group(formcontrols);
     }

     get datedeb() {
      return this.myForm.get('datedeb')
    }

     get theme() {
      return this.myForm.get('theme')
    }
  
  
    get niveau() {
      return this.myForm.get('niveau')
    }
   
   
  
    ngOnInit() {
      
    }
  
   
    Demande(){
    let data =this.myForm.value;
    console.log(data);
    this.as.registerDemande(data).subscribe(
      (res)=>{
        this.toastr.success('demande is successfully created', '');
  
        //this.router.navigate(['/signin']);
        console.log(res);
      },
      (err)=>{
        console.log(err) ;
      }
    )
   }
  }
  