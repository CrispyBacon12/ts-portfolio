import { Component, AfterViewInit, HostBinding, Optional } from '@angular/core';

@Component({
  selector: 'ts-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent {

  @HostBinding('class') section = 'section';

  constructor() { }

}
