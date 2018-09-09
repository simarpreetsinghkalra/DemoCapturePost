import { PushDataResponse } from './../../providers/data-modals/data-modals';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { CaptureData } from '../../providers/data-modals/data-modals';

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
  textToPost: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider, private alertCtrl: AlertController) {
    this.service.getData().subscribe((res: CaptureData)=>{
      this.temprature = res.temprature;
      this.humidity = res.humidity;
      this.pressure = res.pressure;
      this.lightStatus = res.lightStatus;
    },err=>{
      console.log(err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CaptureDataPage');
  }

  pushData(){
    this.service.pushData(this.textToPost).subscribe((res: PushDataResponse)=>{
      let alert = this.alertCtrl.create({
        title: "Message",
        message: res.status,
        buttons: [
          {
            text: 'Okay',
            role: 'cancel',
          }
        ]

      });
      alert.present();
    }, err=>{
      console.log(err);
    });
  }

}
