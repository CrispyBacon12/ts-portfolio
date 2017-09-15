import { Component, OnInit } from '@angular/core';

import { Colours } from '../../../shared/shared.module';

@Component({
  selector: 'ts-homepage-content',
  template: `
    <h1><span class="back-text">Hi</span> I'm Tabitha.</h1>
    <div class="content-body">
      <p><strong>I'm a UX & UI designer</strong> living in Brisbane, Australia.</p>
      <p>With a background in digital, my strength lies in creating human-centered experiences
        through website and app design.
      </p>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 60%;
      padding-left: 30px;
    }

    .content-body {
      padding-right: 45px;
    }

    h1 {
      color: ${Colours.Pink};
      font-size: 700%;
      letter-spacing: -1px;
      transform: scale(1, 1.1);
      transform-origin: left center;
      position: relative;
      margin-top: 0;
      margin-bottom: 75px;
    }

    h1 span {
      position: absolute;
      opacity: 0.3;
      font-size: 300%;
      font-style: italic;
      line-height: 0.1;
      top: 25px;
      transform: scale(0.8, 1);
      transform-origin: left center;
    }

    p {
      font-size: 250%;
      font-weight: 200;
      color: #87888d;
      letter-spacing: -2px;
      margin-top: 0;
      margin-bottom: 45px;
    }

    strong {
      opacity: 1;
      font-weight: 200;
      color: ${Colours.White};
    }
  `]
})
export class HomepageContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

}
