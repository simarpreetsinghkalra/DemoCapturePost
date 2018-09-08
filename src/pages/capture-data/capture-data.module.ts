import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CaptureDataPage } from './capture-data';

@NgModule({
  declarations: [
    CaptureDataPage,
  ],
  imports: [
    IonicPageModule.forChild(CaptureDataPage),
  ],
})
export class CaptureDataPageModule {}
