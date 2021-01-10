import { CalculadoraModule } from './calculadora/calculadora.module';
import { ComponentsDesktopModule } from './components-desktop/components-desktop.module';
import { LayoutModule } from './layout/layout.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {  environment  } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';
import { NgxCurrencyModule } from 'ngx-currency';

library.add(fas, far, fab); // add all icons
export const firebaseConfig = {
  apiKey: "AIzaSyBjo6UzYD4uggnTrwPg9agRkHDEwT5z_VE",
  authDomain: "cidades-estados-71974.firebaseapp.com",
  databaseURL: "https://cidades-estados-71974-default-rtdb.firebaseio.com",
  projectId: "cidades-estados-71974",
  storageBucket: "cidades-estados-71974.appspot.com",
  messagingSenderId: "829171509664",
  appId: "1:829171509664:web:8aa21e6a193e6ab1121cc5",
  measurementId: "G-4FRX9697ZS"
};

@NgModule({
  declarations: [AppComponent, ],

  imports: [
    BrowserModule,
    HttpClientModule,
    LayoutModule,
    FontAwesomeModule,
    ComponentsDesktopModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    IonicModule.forRoot(),
    CalculadoraModule,
    ReactiveFormsModule,
    NgxCurrencyModule,

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
