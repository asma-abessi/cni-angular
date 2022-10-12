

 
  import { Component, OnInit } from '@angular/core';
  import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
  
 
  import { Router } from '@angular/router';
  import { ToastrService } from 'ngx-toastr';
import { CongeService } from 'src/app/services/conge/conge.service';
import Swal from 'sweetalert2';
  
  @Component({
    selector: 'app-conge',
    templateUrl: './conge.component.html',
    styleUrls: ['./conge.component.css']
  })
  export class CongeComponent implements OnInit {
    myForm: FormGroup
    constructor(private fb: FormBuilder,private toastr: ToastrService, private as:CongeService) {
      let formcontrols = {
  
        datedeb: new FormControl('', [Validators.required]
        ),
        datefin: new FormControl('', [
          Validators.required
        ]),
       
        type: new FormControl('', [
          Validators.required
          
        ]),
        
        
      
      }
      this.myForm = this.fb.group(formcontrols);
     }
     get datedeb() {
      return this.myForm.get('datedeb')
    }
  
    get datefin() {
      return this.myForm.get('datefin')
    }
    
    get type() {
      return this.myForm.get('type')
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
    Swal.fire({
      title: 'Parfait!',
      text: 'le superviseur va recevoir un Mail',
      imageUrl: 'https://www.cleanfox.io/blog/wp-content/uploads/2021/01/GMAIL-1024x772.png',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
   }
  }
  
