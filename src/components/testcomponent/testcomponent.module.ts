import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestcomponentComponent } from './testcomponent';

@NgModule({
  declarations: [
    TestcomponentComponent,
  ],
  imports: [
    IonicPageModule.forChild(TestcomponentComponent),
  ],
  exports: [
    TestcomponentComponent
  ]
})
export class TestcomponentComponentModule {}
