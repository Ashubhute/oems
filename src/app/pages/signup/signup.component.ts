import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SignUpService } from '../all-services/signUp/sign-up.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
hide=true;
Signup=new FormGroup({
  username:new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.required]),
  firstname:new FormControl('',[Validators.required]),
  lastname:new FormControl('',[Validators.required]),
  email:new FormControl('',[Validators.required]),
  phone:new FormControl('',[Validators.required]),
})
  constructor(private signupservice:SignUpService,private router:Router) { }
  
  ngOnInit(): void {
    
  }
  userSignup(){
    console.log(this.Signup.value);
    this.signupservice.userSignup(this.Signup.value)
    .subscribe((res)=>{
      console.log(res);
      
      Swal.fire('Successfully Done','Welcome To Career Infotech','success');
      this.router.navigate([''])
  },
   (error)=>{
    console.log(error);
    
    Swal.fire('Something went wrong','User Not Found','success');
   })
    
  }
}
