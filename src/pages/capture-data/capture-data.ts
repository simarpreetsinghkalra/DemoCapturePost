import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CaptureDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-capture-data',
  templateUrl: 'capture-data.html',
})
export class CaptureDataPage {
  temprature: number = 12;
  humidity: number = 13;
  pressure: number = 45;
  lightStatus: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CaptureDataPage');
  }

  pushData(){
    
  }

}
