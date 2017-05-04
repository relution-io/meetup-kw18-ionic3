import { ViewChild } from '@angular/core';
import { Tabs } from 'ionic-angular/components/tabs/tabs';
import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('meetupTabs') tabRef: Tabs;

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {
    
  }
  changed(event) {
    console.log('tab changed', event);
  }
  ionViewDidEnter() {
    setTimeout(() => this.tabRef.select(2), 1200);
  }
}
