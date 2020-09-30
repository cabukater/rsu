import { HeaderMobileComponent } from './header-mobile/header-mobile.component';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';
import { MenuDesktopComponent } from './menu-desktop/menu-desktop.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    HeaderMobileComponent,
    MenuDesktopComponent,
    MenuMobileComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  entryComponents : [
    MenuDesktopComponent,
    HeaderMobileComponent,
    MenuMobileComponent
  ], exports :[
    MenuDesktopComponent,
    HeaderMobileComponent,
    MenuMobileComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class LayoutModule { }
