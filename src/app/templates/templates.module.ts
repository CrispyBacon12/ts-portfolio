import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as homepage from './homepage/homepage.module';
import * as detailLanding from './detail-landing/detail-landing.module';
import * as detail from './detail/detail.module';

@NgModule({
  imports: [
    CommonModule,
    homepage.HomepageModule,
    detailLanding.DetailLandingModule,
    detail.DetailModule
  ],
  declarations: []
})
export class TemplatesModule { }

export {
  homepage,
  detailLanding,
  detail
};
