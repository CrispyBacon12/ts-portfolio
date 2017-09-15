import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule, FullpageModule } from '../../shared/shared.module';

import { HomepageComponent } from './homepage/homepage.component';
import { HomepageContentComponent } from './homepage-content/homepage-content.component';
import { VirginContentComponent } from './virgin-content/virgin-content.component';

const components = [
  HomepageComponent,
  HomepageContentComponent,
  VirginContentComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FullpageModule
  ],
  declarations: components,
  exports: [components]
})
export class HomepageModule { }

export {
  HomepageComponent
};
