import { Component, OnInit } from '@angular/core';
import { Colours } from '../../../shared/shared.module';
@Component({
  selector: 'ts-virgin-content',
  template: `
    <h1>Virgin Australia</h1>
    <div class="content-body">
      <p class="subtitle">UX & UI, Web and App Design</p>
      <p class="link"><a href="#">View selected works --&gt;</a></p>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 60%;
      padding-left: 30px;
    }

    h1 {
      font-size: 700%;
      font-weight: normal;
      color: ${Colours.VirginRed};
      margin-top: 0;
      margin-bottom: 25px;
      line-height: 0.9;
    }

    .content-body {
      color: ${Colours.DarkBlue};
    }
  `]
})
export class VirginContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
