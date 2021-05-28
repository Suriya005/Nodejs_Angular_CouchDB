//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 form:any = {};
 dataUsers:any = {};
  constructor(private main: MainService) { }

  ngOnInit(): void {

  }
 
  sendForm(){
    this.main.loginInfo(this.form).then((res:any) =>{
      res = this.dataUsers;
      console.log(this.dataUsers);
    }).catch((err) => {
      console.log(err)
    })
  }
}


