
 
  
  
  import { Component, OnInit } from '@angular/core';
  import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
  
  import { Router } from '@angular/router';
  import { ToastrService } from 'ngx-toastr';
import { AvanceService } from 'src/app/services/avance/avance.service';

  
  @Component({
    selector: 'app-ajouter-avance',
    templateUrl: './ajouter-avance.component.html',
    styleUrls: ['./ajouter-avance.component.css']
  })
  export class  AjouterAvanceComponent implements OnInit {
    myForm: FormGroup
    constructor(private fb: FormBuilder,private toastr: ToastrService, private as:AvanceService) {
      let formcontrols = {
  
        discription: new FormControl('', [Validators.required,
        Validators.pattern("[a-z . '-]+")]
        ),
      
        montant: new FormControl('', [
          Validators.required
        ]),
        
        datedemande: new FormControl('', [
          Validators.required
        ]),
      
  
        
      
      }
      this.myForm = this.fb.group(formcontrols);
     }
     get discription() {
      return this.myForm.get('discription')
    }
  
  
    get montant() {
      return this.myForm.get('montant')
    }
    get datedemande() {
      return this.myForm.get('datedemande')
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
  