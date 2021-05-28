import { HttpClient } from '@angular/common/http';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MainService {


  constructor(private http: HttpClient) { }
  // getinfo(user: string) {
  //   return this.http.get(environment.serverUrl + `/api/getdata?username=${user}`).toPromise();
  // }
  getinfo() {
    return this.http.get(environment.serverUrl + `/api/getdata`).toPromise();
  }

  getHospital() {
    return this.http.get(`https://vcc.lampanghospital.com/service/gethospitalall`).toPromise();
  }

  loginInfo(form:any){
    return this.http.post(environment.serverUrl + `/api/login`,form).toPromise();
  }

  registerInfo(users:any){
    return this.http.post(environment.serverUrl + `/api/register`,users).toPromise();
  }

}
