import { Component } from '@angular/core';

@Component({
  selector: 'ts-root',
  template: `
    <h1>
      Welcome to {{title}}!!
    </h1>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'ts';
}
