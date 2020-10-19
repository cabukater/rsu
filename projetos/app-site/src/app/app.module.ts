import { ComponentsDesktopModule } from './components-desktop/components-desktop.module';
import { LayoutModule } from './layout/layout.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
//import { AngularFireModule } from '@angular/fire';
//import { AngularFireDatabaseModule } from '@angular/fire/database';
import {  environment  } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

library.add(fas, far, fab); // add all icons

@NgModule({
  declarations: [AppComponent, ],
  entryComponents: [],
  imports: [
    BrowserModule,
    LayoutModule,
    FontAwesomeModule,
    ComponentsDesktopModule,
   // AngularFireModule.initializeApp(firebase),
    //AngularFireDatabaseModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
],
  providers: [
    StatusBar,
    NavParams,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  bootstrap: [AppComponent]
})
export class AppModule {}
