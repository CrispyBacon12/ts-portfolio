import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavigationModule } from './navigation/navigation.module';
import { TemplatesModule } from './templates/templates.module';
import { FullpageModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    TemplatesModule,
    FullpageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
