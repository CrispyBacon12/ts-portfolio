import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Header from './header/header.module';
import { SlideNavigationComponent } from './slide-navigation/slide-navigation.component';

export * from './colours';
export * from './fullpage/fullpage.module';

const components = [
  SlideNavigationComponent,
];

@NgModule({
  imports: [
    CommonModule,
    Header.HeaderModule
  ],
  declarations: components,
  exports: [...components, Header.exportedComponents]
})
export class SharedModule { }
