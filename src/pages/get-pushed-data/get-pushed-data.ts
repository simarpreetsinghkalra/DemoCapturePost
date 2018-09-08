import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  data: {date: Date, data: string}[] = [{date: new Date(),data: 'hello'}];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetPushedDataPage');
  }

}
