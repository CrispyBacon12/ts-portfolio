import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HeaderComponent } from './header/header.component';

export const components = [
  LogoComponent,
  MainNavComponent,
  HeaderComponent
];

export const exportedComponents = [
  HeaderComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: components,
  exports: exportedComponents
})
export class HeaderModule { }
