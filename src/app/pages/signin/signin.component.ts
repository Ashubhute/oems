import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SigninService } from '../all-services/signIn/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  hide=true;
 signIn=new FormGroup({
  username:new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.required]),
 });
  constructor(private ashu:SigninService,private router:Router) { }

  ngOnInit(): void {
  }
userSingIn(){
  console.log(this.signIn.value);
  this.ashu.generateToken(this.signIn.value)
  .subscribe(
    (Response)=>{
     console.log('get token',Response);
     this.ashu.SignInUser(Response);
     this.ashu.getcurrentuser().subscribe((Response)=>{
      console.log("Current User Data",Response);
      this.ashu.setUser(Response);



      if(this.ashu.getuserRole()=="ADMIN"){
        this.router.navigate(['admin']);
        this.ashu.signInStatusSubject.next(true)

      }else if(this.ashu.getuserRole()=="NORMAL"){
         this.router.navigate(['user']);
         this.ashu.signInStatusSubject.next(true)
         
      }else{
        this.ashu.signOut();
      }
      
     },(error)=>{ console.log(error);
     }
     )
     
    },(error)=>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Invalid Details !! Try Again',
        showConfirmButton: false,
        timer: 1500
      })
    }
  )
  
}


}
