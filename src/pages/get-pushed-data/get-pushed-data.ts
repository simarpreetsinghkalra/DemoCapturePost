import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { PushedData } from '../../providers/data-modals/data-modals';

/**
 * Generated class for the GetPushedDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-get-pushed-data',
  templateUrl: 'get-pushed-data.html',
})
export class GetPushedDataPage {
  data: {date: string, data: string}[] = [{date: "Sep 16, 2017" ,data: 'hello'}];
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider) {
    this.service.getPushedData().subscribe((res: PushedData[])=>{
      this.data = [...res]; 
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetPushedDataPage');
  }

}
