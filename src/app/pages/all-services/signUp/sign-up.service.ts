import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from '../helper/helper';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http:HttpClient) { }
  
  
  userSignup(userdata:any){
  return this.http.post(`${baseUrl}/user/`,userdata);
  }
}
