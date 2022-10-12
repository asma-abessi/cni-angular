import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { EmployeService } from 'src/app/services/employe/employe.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ajouter-employe',
  templateUrl: './ajouter-employe.component.html',
  styleUrls: ['./ajouter-employe.component.css']
})
export class AjouterEmployeComponent implements OnInit {
  myForm: FormGroup
  constructor(private fb: FormBuilder,private toastr: ToastrService, private as:EmployeService) {
    let formcontrols = {

      nom: new FormControl('', [Validators.required,
      Validators.pattern("[a-z . '-]+")]
      ),
      prenom: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z . '-]+")
      ]),
     
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      salaire: new FormControl('', [
        Validators.required
      ]),
      adresse: new FormControl('', [
        Validators.required
      ]),
      datenaiss: new FormControl('', [
        Validators.required
      ]),
      telphone: new FormControl('', [
        Validators.required
      ]),

      
    
    }
    this.myForm = this.fb.group(formcontrols);
   }
   get nom() {
    return this.myForm.get('nom')
  }

  get prenom() {
    return this.myForm.get('prenom')
  }
  
  get email() {
    return this.myForm.get('email')
  }
  get password() {
    return this.myForm.get('password')
  }
  get salaire() {
    return this.myForm.get('salaire')
  }
  get datenaiss() {
    return this.myForm.get('datenaiss')
  }
  get telphone() {
    return this.myForm.get('telphone')
  }

  ngOnInit() {
    
  }

 
signup(){
  let data =this.myForm.value;
  console.log(data);
  this.as.registerUser(data).subscribe(
    (res)=>{
      this.toastr.success('user is successfully created', '');

      //this.router.navigate(['/signin']);
      console.log(res);
    },
    (err)=>{
      console.log(err) ;
    }
  )
 }
}
