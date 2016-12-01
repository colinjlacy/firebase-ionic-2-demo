import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { BasicPage } from '../basic-demo/basic-demo';
import { AuthPage } from '../auth/auth';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = BasicPage;
  tab3Root: any = AuthPage;

  constructor() {

  }
}
