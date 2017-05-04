import { TestMeetupPage } from '../test-meetup/test-meetup';
import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public event: Events) {
    this.event.subscribe('TestPAGEBUTTONCLICKED', (event) => {
      console.log('page homw', event);
    })
  }

  goToTestPage() {
    this.navCtrl.push(TestMeetupPage, {name: 'Fritz'});
  }
  
}
