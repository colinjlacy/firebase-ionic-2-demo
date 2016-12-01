/**
 * Created by colinjlacy on 6/5/16.
 */
import {Injectable} from '@angular/core';

import firebase from 'firebase';

@Injectable()
export class DataService {
    public db: any;
    public staticData: any;
    public privateData: any;
    constructor() {}

    init() {
      const fbConf = {
        apiKey: "AIzaSyD44soNIK81xzRjQXZ2Lmlb03CBIx4zVY4",
        authDomain: "fir-app-f088c.firebaseapp.com",
        databaseURL: "https://fir-app-f088c.firebaseio.com",
        storageBucket: "fir-app-f088c.appspot.com"
      };

      firebase.initializeApp(fbConf);

      this.db = firebase.database().ref('/');
      this.staticData = firebase.database().ref('/static');
      this.privateData = firebase.database().ref('/private');
    }
}
