import { Component, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

import { DataService } from '../../providers/data/data.service';
import { UserService } from '../../providers/user/user.service';

@Component({
    templateUrl: './auth.html',
})
export class AuthPage {
    public authStatus: boolean;
    public message: string;

    private privateData: BehaviorSubject<string>;
    private isAuth: BehaviorSubject<boolean>;

    constructor(private _data:DataService, private _user:UserService, private _cd:ChangeDetectorRef) {
        this.isAuth = new BehaviorSubject(false);
        this.privateData = new BehaviorSubject('');

        this.isAuth.subscribe(val => this.authStatus = val);
        this.privateData.subscribe(val => this.message = val);
    }

    ionViewDidLoad() {
        this._user.auth.onAuthStateChanged(user => {
            this.isAuth.next(!!user);
            this._cd.detectChanges();
            this._data.db.child('/private').on('value', data => {
                this.privateData.next(data.val());
                this._cd.detectChanges();
            }, err => console.log(err));
        });

    }
}
