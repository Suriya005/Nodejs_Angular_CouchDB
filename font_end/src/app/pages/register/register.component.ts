import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  users:any = {};
  constructor(private main: MainService) { }

  ngOnInit(): void {
  }

  sendUsers(){
    this.main.registerInfo(this.users).then((res) =>{
      console.log(res)
    }).catch((err) =>{
      console.log(err)
    })
  }

}
