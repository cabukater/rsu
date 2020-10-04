import { HeaderMobileComponent } from './header-mobile/header-mobile.component';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';
import { MenuDesktopComponent } from './menu-desktop/menu-desktop.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FooterDesktopComponent } from './footer-desktop/footer-desktop.component';
import { FooterMobileComponent } from './footer-mobile/footer-mobile.component';

@NgModule({
  declarations: [
    HeaderMobileComponent,
    MenuDesktopComponent,
    MenuMobileComponent,
    FooterDesktopComponent,
    FooterMobileComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  entryComponents : [
    MenuDesktopComponent,
    HeaderMobileComponent,
    MenuMobileComponent,
    FooterDesktopComponent,
    FooterMobileComponent,
  ], exports :[
    MenuDesktopComponent,
    HeaderMobileComponent,
    MenuMobileComponent,
    FooterDesktopComponent,
    FooterMobileComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class LayoutModule { }
