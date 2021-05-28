import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Make Variables
  title : any;
  info: any = {};
  hospital: any[] = [];
  hero: any = {
    id: 1,
    name: 'Windstorm'
  };


  constructor(private main: MainService) { }

  // Use function and anything value
  ngOnInit(): void {
    this.title = "hello";
    // setInterval(() => {
    //   this.value += 1;
    //   this.test(this.value +'')
    // }, 1);
    this.loadinfo();
    this.loadhospital();
  
  }


  // Make function



  loadhospital() {
    this.main.getHospital().then((res: any) => {
      console.log(res);
      this.hospital = res;
    });
  }

  loadinfo() {
    this.main.getinfo().then((res: any) => {
      console.log(res);
      this.info = res;
    });
  }

  test(x: string) {
    this.title = "HP -" + x;
  }

}
