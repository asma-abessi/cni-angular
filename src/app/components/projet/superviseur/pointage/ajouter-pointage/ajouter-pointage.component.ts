
  import { Component, OnInit } from '@angular/core';
  import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
  
  import { Router } from '@angular/router';
  import { ToastrService } from 'ngx-toastr';
import { PointageService } from 'src/app/services/pointage/pointage.service';



  
  @Component({
    selector: 'app-ajouter-pointage',
    templateUrl: './ajouter-pointage.component.html',
    styleUrls: ['./ajouter-pointage.component.css']
  })
  export class AjouterPointageComponent implements OnInit {
    myForm: FormGroup
    constructor(private fb: FormBuilder,private toastr: ToastrService, private as:PointageService) {
      let formcontrols = {
  
        present: new FormControl('', [Validators.required,
        Validators.pattern("[a-z . '-]+")]
        ),
      
        datedeb: new FormControl('', [
          Validators.required
        ]),
        datefin: new FormControl('', [
          Validators.required
        ]),
        nbheure: new FormControl('', [
          Validators.required
        ]),
      
  
        
      
      }
      this.myForm = this.fb.group(formcontrols);
     }
     get present() {
      return this.myForm.get('present')
    }
  
  
    get datedeb() {
      return this.myForm.get('datedeb')
    }
    get datefin() {
      return this.myForm.get('datefin')
    }
   
    get nbheure() {
      return this.myForm.get('nbheure')
    }
    ngOnInit() {
      
    }
  
   
    Demande(){
    let data =this.myForm.value;
    console.log(data);
    this.as.registerDemande(data).subscribe(
      (res)=>{
        this.toastr.success('pointage is successfully created', '');
  
        //this.router.navigate(['/signin']);
        console.log(res);
      },
      (err)=>{
        console.log(err) ;
      }
    )
   }
  }
  