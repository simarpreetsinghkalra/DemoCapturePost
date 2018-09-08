import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataModalsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataModalsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DataModalsProvider Provider');
  }

}

export interface CaptureData {
  temprature?: number;
  humidity?: number;
  pressure?: number;
  lightStatus: boolean;
}

export interface PushedData {
  date: string;
  data: string;
}
