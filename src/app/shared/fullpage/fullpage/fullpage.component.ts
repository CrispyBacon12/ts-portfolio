import {
  Component,
  OnInit,
  ElementRef,
  Input,
  ChangeDetectionStrategy,
  OnDestroy,
  ChangeDetectorRef,
  ViewChildren,
  QueryList
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import * as $ from 'jquery';
import 'fullpage.js/dist/jquery.fullPage.js';
import { SectionComponent } from '../section/section.component';



export type SectionId = string | number;

@Component({
  selector: 'ts-fullpage',
  templateUrl: './fullpage.component.html',
  styleUrls: ['./fullpage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullpageComponent implements OnInit, OnDestroy {

  @Input() contentChanges: Observable<null>;
  @ViewChildren(SectionComponent) sectionComps: QueryList<SectionComponent>;

  fullPage: any;

  private subscription: Subscription;

  constructor(private el: ElementRef, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.subscription = this.contentChanges.subscribe((e) => {
      console.log('content changed');
      this.fullPage = $(this.el.nativeElement).fullpage({
        css3: true,
        autoScrolling: true,
        scrollingSpeed: 500,
        verticalCentered: false,
        scrollBar: true
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  moveSectionUp() {
    this.fullPage.moveSection();
  }

  moveSectionDown() {
    this.fullPage.moveSectionDown();
  }

  moveSlideRight() {
    this.fullPage.moveSlideRight();
  }

  moveSlideLeft() {
    this.fullPage.moveSlideLeft();
  }

  moveTo(section: SectionId, slide = 0) {
    this.fullPage.moveTo(section, slide);
  }

  silentMoveTo(section: SectionId, slide = 0) {
    this.fullPage.silentMoveTo(section, slide);
  }

}
