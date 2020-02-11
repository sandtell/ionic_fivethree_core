import { Component, ViewChild } from '@angular/core';
import { FivFeature } from '@fivethree/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('feature', { static : true }) feature: FivFeature;

  badge = 1;
  constructor() {}
  // show() {
  //   this.feature.show();
  // }
  // hide() {
  //   this.feature.hide();
  // }
}
