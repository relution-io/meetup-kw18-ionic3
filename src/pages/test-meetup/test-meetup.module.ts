import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestMeetupPage } from './test-meetup';

@NgModule({
  declarations: [
    TestMeetupPage,
  ],
  imports: [
    IonicPageModule.forChild(TestMeetupPage),
  ],
  exports: [
    TestMeetupPage
  ]
})
export class TestMeetupPageModule {}
