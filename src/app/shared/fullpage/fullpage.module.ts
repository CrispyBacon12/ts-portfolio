import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullpageComponent } from './fullpage/fullpage.component';
import { SectionComponent } from './section/section.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FullpageComponent, SectionComponent],
  exports: [FullpageComponent, SectionComponent]
})
export class FullpageModule { }
