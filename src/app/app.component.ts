import { ApiserviceService } from './shared/service/apiservice.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'MyProject';
  public data : any ;
 public user :any ={};
id: any;


  constructor(private ApiserviceService : ApiserviceService){}
  ngOnInit(): void {
this.getallusers()

  }
getallusers(){
  this.ApiserviceService.getUser().subscribe(res=>{
    this.data = res ;
  })
}

  getUserById(id:any){
    this.ApiserviceService.getUserbyId(id).subscribe(res=>{
      this.user=res ;
      console.log(this.user)
    })
  }

  AddUser(User:any){
    if(this.user.id!=null){
      this.ApiserviceService.editUser(User).subscribe(
        res=>{
          console.log(res)
          this.getallusers
        }
      );
    }else{
      this.ApiserviceService.addUser(User).subscribe(
        res=>{
          console.log(res)
          this.getallusers()
      })
    }


  }
  delateUser(id :any){
this.ApiserviceService.delateUser(id).subscribe(
  res=>{console.log(res)
  this.getallusers()
  }
)
  }
  reset(){
    this.user={}
  }

}
