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
    this.checkScreen();
    const animateCSS = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
      const animationName = `${prefix}${animation}`;
      const node = document.querySelector(element);
  
      node.classList.add(`${prefix}animated`, animationName);
  
      // When the animation ends, we clean the classes and resolve the Promise
      function handleAnimationEnd() {
        node.classList.remove(`${prefix}animated`, animationName);
        resolve('Animation ended');
      }
  
      node.addEventListener('animationend', handleAnimationEnd, {once: true});
    });
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
        this.screen = 'desktop';

        console.log('ass vezea');
      } else {
        this.screen = 'mobile';
        console.log('menos');
      }
    });
  }

  onResize(event) {
   this.checkScreen();
  }

  openMenuMobile() {
   /* const page = this.navCtrl.setDirection('MenuMobileComponent', {
      park: location
    });*/
  }
}
