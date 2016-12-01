import { Component } from '@angular/core';

import { DataService } from '../../providers/data/data.service';

@Component({
  selector: 'page-basic-demo',
  templateUrl: 'basic-demo.html'
})
export class BasicPage {

  public message: string;
  public direct: string;

  constructor(private _data: DataService) {}

  ionViewDidEnter() {
    // this can probably be improved with observables
    Promise.all([this.fetchMessage(), this.fetchDirect()]);
  }

  private fetchMessage() {
    return new Promise(res => {
      // this method...
      this._data.db.child('static').on('value', data => {
        this.message = data.val();
        res();
      });
    });
  }

  private fetchDirect() {
    return new Promise(res => {
      // ...fetches the same data as this method
      this._data.staticData.on('value', data => {
        this.direct = data.val();
        res();
      });
    });
  }

}
