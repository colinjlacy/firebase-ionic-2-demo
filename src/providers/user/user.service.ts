/**
 * Created by colinjlacy on 6/5/16.
 */
import {Injectable} from '@angular/core';

import firebase from 'firebase';

@Injectable()
export class UserService {
    public auth: any;
    constructor() {
        this.auth = firebase.auth();
    }

    public login(userEmail: string, userPassword: string) {
        return new Promise((resolve, reject) => {
            this.auth.signInWithEmailAndPassword(userEmail, userPassword)
                .then(userData => resolve(userData),
                    err => reject(err));
        });
    }

    public logout() {
        return this.auth.signOut();
    }
}
