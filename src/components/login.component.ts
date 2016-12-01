/**
 * Created by colinjlacy on 6/5/16.
 */
import { Component } from '@angular/core';
import { UserService } from '../providers/user/user.service';

@Component({
    selector: 'login',
    template: `
    <h3>Login to see some stuff using these creds:</h3>
    <dl>
    <dt>Email:</dt>
    <dd>cave@aperture.com</dd>
    <dt>Password:</dt>
    <dd>notneverbutnow</dd>
    </dl>
    <form (ngSubmit)="login()">
        <ion-list>
            <ion-item>
                <ion-label stacked>Email</ion-label>
                <ion-input [(ngModel)]="userEmail"
                           type="email" name="userEmail"></ion-input>
            </ion-item>

            <ion-item>
                <ion-label stacked>Password</ion-label>
                <ion-input [(ngModel)]="userPassword"
                           type="password" name="userPassword"></ion-input>
            </ion-item>

            <hr/>
            <button type="submit" ion-button>Login!</button>
        </ion-list>
    </form>`
})
export class LoginComponent {
    public userEmail: string;
    public userPassword: string;

    constructor(private _user: UserService) {}

    public login() {
        this._user.login(this.userEmail, this.userPassword)
    }
}
