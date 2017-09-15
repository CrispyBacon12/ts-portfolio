import { Component, AfterViewInit, HostBinding, Output, EventEmitter } from '@angular/core';
import { Colours } from '../../../shared/shared.module';

@Component({
  selector: 'ts-homepage',
  template: `
    <ts-header class="header"></ts-header>
    <ts-slide-navigation class="slide-navigation"></ts-slide-navigation>
    <ts-section id="home">
      <div class="content">
        <ts-homepage-content></ts-homepage-content>
      </div>
    </ts-section>
    <ts-section id="virgin">
      <div class="content">
        <ts-virgin-content></ts-virgin-content>
      </div>
    </ts-section>
  `,
  styles: [`
    :host {
      display: block;
      color: ${Colours.White};
      position: relative;
    }

    #home {
      background-color: ${Colours.DarkBlue};
      background-image: url('assets/emma.png');
      background-repeat: no-repeat;
      background-position: right top;
      background-size: contain;
    }

    #virgin {
      background-color: ${Colours.VirginPeach};
      background-image: url('assets/plane.png');
      background-repeat: no-repeat;
      background-position: 90% center;
      background-size: 50%;
    }

    .content {
      display: block;
      width: 100%;
      margin: auto;
    }

    .header {
      position: absolute;
      left: 0;
      right: 0;
      z-index: 1;
    }

    .slide-navigation {
      position: fixed;
    }

    @media screen and (min-width: 800px) {
      .content {
        width: 800px;
      }
    }

    @media screen and (min-width: 1200px) {
      .content {
        width: 1024px;
      }
    }
  `]
})
export class HomepageComponent implements AfterViewInit {
  @Output() rendered = new EventEmitter<HomepageComponent>();

  constructor() { }

  ngAfterViewInit() {
    this.rendered.emit(this);
  }

}
