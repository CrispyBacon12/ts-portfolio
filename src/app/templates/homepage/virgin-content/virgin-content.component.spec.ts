import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirginContentComponent } from './virgin-content.component';

describe('VirginContentComponent', () => {
  let component: VirginContentComponent;
  let fixture: ComponentFixture<VirginContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirginContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirginContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
