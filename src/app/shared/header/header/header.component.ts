import { Component, OnInit } from '@angular/core';

const headerHeight = 135 / 2;

@Component({
  selector: 'ts-header',
  template: `
    <ts-logo></ts-logo>
    <ts-main-nav></ts-main-nav>
  `,
  styles: [`
    :host {
      display: flex;
      height: ${headerHeight}px;
      justify-content: space-between;
    }
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
