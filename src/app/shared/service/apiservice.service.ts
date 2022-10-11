import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  private readonly BASE_URL = environment.base_url
  constructor(private httpclient:HttpClient) { }



  getallUsers(){

  }
  getUserbyId(id: any){
  return this.httpclient.get(`${this.BASE_URL}/${id}`);

  }
  getUser(){
    return this.httpclient.get(this.BASE_URL);
  }
  addUser(User :any){
    return this.httpclient.post(this.BASE_URL,User);
  }
  editUser(User :any){
    console.log(User.id);
    return this.httpclient.put(this.BASE_URL,`${this.BASE_URL}/${User.id}`,User);

  }
  delateUser(id :any){
    return this.httpclient.delete(`${this.BASE_URL}/${id}`);

  }
}
