import { Component, OnInit } from '@angular/core';
import { Colours } from '../../colours';

@Component({
  selector: 'ts-main-nav',
  template: `
    <ul>
      <li><a href="#">Work</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  `,
  styles: [`
    :host {
      display: flex;
      font-weight: bold;
      font-size: 80%;
      letter-spacing: 1px;
    }

    a:link,
    a:visited {
      color: ${Colours.White};
      opacity: 0.8;
      text-decoration: none;
      transition: opacity 0.25s linear;
    }

    a:hover,
    a:active {
      opacity: 1;
    }

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      text-transform: uppercase;
    }

    li {
      display: block;
      margin-right: 1.5rem;
    }
  `]
})
export class MainNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
