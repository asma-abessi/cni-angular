import { Component, OnInit , HostListener} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register/register.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { user } from '../models/user-modele';
@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  myForm: FormGroup
  myForm1: FormGroup
  
  constructor(private fb: FormBuilder, private fb1: FormBuilder, private toastr: ToastrService,private as :RegisterService,private router : Router) {
    let formcontrols = {
      name: new FormControl('', [Validators.required,
      Validators.pattern("[a-z . '-]+")]
      ),
      username: new FormControl('', [
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
      role :new FormControl('', [
        Validators.required
      ])
    }
    this.myForm = this.fb.group(formcontrols);
    let formcontrols1 = {
      username1: new FormControl('', [
        Validators.required
      ]),
      password1: new FormControl('', [
        Validators.required
      ])
    }
    this.myForm1 = this.fb1.group(formcontrols1);

  }

  get name() {
    return this.myForm.get('name')
  }

  get username() {
    return this.myForm.get('username')
  }
  get role(){
    return this.myForm.get('role')
  }
  get email() {
    return this.myForm.get('email')
  }
  get password() {
    return this.myForm.get('password')
  }
  get username1() {
    return this.myForm1.get('username1')
  }
  get password1() {
    return this.myForm1.get('password1')
  }

  ngOnInit(): void {
  }

  @HostListener("document : click")
  clicksignup() {
    const signUpButton = document.getElementById('signUp');
    const container = document.getElementById('container');
    signUpButton.addEventListener('click', () => {
      container.classList.add('right-panel-active');
    });
  }

  clicksignin() {
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    signInButton.addEventListener('click', () => {
      container.classList.remove('right-panel-active');
    });

  }
  

  
  connectUser() {
    console.log(this.myForm1.value);
  }
 /* showSuccess() {
    let name = this.myForm.get('Name').value ;
    let Username =this.myForm.get('Username').value ;
    let email =this.myForm.get('Email').value ;
    let Password =this.myForm.get('Password').value ;
    if(name==null || name == '' || Username ==null || Username ==''|| email == null || email == '' || Password== null || Password == ''){
      this.toastr.error('fillin all  the fields', '');
    }else{
    }
  }*/

 signup(){
  let data =this.myForm.value;
  console.log(data);
  data.role =[data.role] ;
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
 signin(){
  let data =this.myForm1.value;
  let user1 = new user (data.username1 , data.password1)
  console.log(user1);
 this.as.loginUser(user1).subscribe(
    (res)=>{
      console.log(res);
      let token = res.accessToken;
      localStorage.setItem("myToken",token);
      this.toastr.success("utilisateur reconnu") ;

      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      let role = decodedToken.roles
  
        //  this.router.navigate(['/home']);
        console.log(role);
        if(role== "[ROLE_employe]"){
          this.router.navigate(['/homeemploye']);
  
        }
        if(role == "[ROLE_chefgeneral]" ){
          this.router.navigate(['/homechef']);
        }
        if(role == "[ROLE_superviseur]" ){
          this.router.navigate(['/homesuperviseur']);
        }
        
    },
    (err)=>{
      console.log(err) ;
    }
  )
 }
  
}
