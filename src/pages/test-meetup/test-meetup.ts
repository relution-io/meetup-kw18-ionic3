import { Events } from 'ionic-angular';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TestMeetupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-test-meetup',
  templateUrl: 'test-meetup.html',
})
export class TestMeetupPage implements AfterViewInit{
  private _name: string;

  constructor(public event: Events, public navCtrl: NavController, private navParams: NavParams) {
    console.log('constructor TestMeetupPage', this.navParams.data);
    setTimeout(() => this.name = this.navParams.data.name, 1400);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestMeetupPage');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit TestMeetupPage');
  }
  set name(v:string) {
    this._name = v;
  }
  get name() {
    if (!this._name || !this._name.length) {
      return 'onload';
    }
    return this._name;
  }
  subComponentButtonClicked(event) {
    this.event.publish('TestPAGEBUTTONCLICKED', event);
    console.log('buttonClick', event);
  }
}
