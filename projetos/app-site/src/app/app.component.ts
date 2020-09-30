import { Component } from '@angular/core';

import { NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuMobileComponent } from './layout/menu-mobile/menu-mobile.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  screen: string;
 
  constructor(
    public navCtrl: NavController,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    this.checkScreen()
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  checkScreen() {
    this.platform.ready().then(readySource => {
      if (this.platform.width() >= 768) {
        this.screen = "desktop";
      
        console.log('ass vezea')
      } else {
        this.screen = "mobile";
         console.log('menos')
      }
    });
  }

  onResize(event) {
   this.checkScreen()
  }

  openMenuMobile() {
   /* const page = this.navCtrl.setDirection('MenuMobileComponent', {
      park: location
    });*/
  }
}
