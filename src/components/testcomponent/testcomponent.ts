import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { Component } from '@angular/core';

/**
 * Generated class for the TestcomponentComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'testcomponent',
  templateUrl: 'testcomponent.html'
})
export class TestcomponentComponent {
  private _myName:string;

  @Input() set name(v: string) {
    this._myName = v;
  }
  @Output() buttonClick = new EventEmitter(true);
  get name() {
    return `Hallo ${this._myName}`;
  }
  text: string;

  constructor() {
    console.log('Hello TestcomponentComponent Component');
    this.text = 'Hello World';
  }

  buttonClicked() {
    this.buttonClick.emit({name: this.name});
  }
}
