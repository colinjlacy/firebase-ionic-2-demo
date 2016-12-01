import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { BasicPage } from '../pages/basic-demo/basic-demo';
import { AuthPage } from '../pages/auth/auth';
import { LoginComponent } from '../components/login.component';
import { LogoutComponent } from '../components/logout.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DataService } from '../providers/data/data.service';
import { UserService } from '../providers/user/user.service';

@NgModule({
    declarations: [
        MyApp,
        BasicPage,
        AuthPage,
        HomePage,
        TabsPage,
        LoginComponent,
        LogoutComponent
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        BasicPage,
        AuthPage,
        HomePage,
        TabsPage
    ],
    providers: [
        DataService,
        UserService
    ]
})
export class AppModule {}
