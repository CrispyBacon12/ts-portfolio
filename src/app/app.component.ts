import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/filter';

import { HomepageComponent } from './templates/homepage/homepage.module';


@Component({
  selector: 'ts-root',
  template: `
    <ts-fullpage [contentChanges]="navigationEnd">
      <router-outlet (activate)="onActivate($event)"></router-outlet>
    </ts-fullpage>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  navigationEnd: any;
  private templateRendered = new Subject<Component>();

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.navigationEnd = this.templateRendered.asObservable();
  }

  onActivate(component: Component) {
    if (component instanceof HomepageComponent) {
      component.rendered.subscribe(e => {
        this.templateRendered.next();
      });
    }
  }
}
