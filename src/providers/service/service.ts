import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PushedData } from '../data-modals/data-modals';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {
  baseUrl = "http://sbbsuniversity.ac.in/";
  
  constructor(public http: HttpClient) {
    console.log('Hello ServiceProvider Provider');
  }

  getData(){
    return this.http.get(this.baseUrl + "DemoAppData");
  }

  getPushedData(){
    return this.http.get<PushedData[]>(this.baseUrl + "DemoAppPostedData");
  }

  pushData(data){
    return this.http.post(this.baseUrl + "DemoAppPostData", undefined,{
      params: {data: data}
    });
  }

}
