import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetPushedDataPage } from './get-pushed-data';

@NgModule({
  declarations: [
    GetPushedDataPage,
  ],
  imports: [
    IonicPageModule.forChild(GetPushedDataPage),
  ],
})
export class GetPushedDataPageModule {}
