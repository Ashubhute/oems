import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from '../helper/helper';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http:HttpClient) { }

  public signInStatusSubject = new Subject<boolean>();
  public getcurrentuser(){
   return this.http.get(`${baseUrl}/current-user`)
  }
  public generateToken(signindata:any){
   return this.http.post(`${baseUrl}/generate-token`,signindata);
  }
  public SignInUser(token:any){
    localStorage.setItem('token',token.token);
    return true;
  }

  public IssignIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null){
    return false;
    }else{
      return true
    }
  }

   
  public signOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true
  }



  public getToken(){
    console.log("Get token",localStorage.getItem('token'));
    return localStorage.getItem('token');
  }
  public setUser(user:any){
  localStorage.setItem('user',JSON.stringify(user));
  }
  public getUser(){
  let userStr = localStorage.getItem('user');
  if(userStr !=null){
    return JSON.parse(userStr);
  }else{
   this.signOut();
   return null;
  }
}
public getuserRole(){
  let user = this.getUser();
  console.log('role user',user);
  return user.authorities[0].authority;
  
}
}