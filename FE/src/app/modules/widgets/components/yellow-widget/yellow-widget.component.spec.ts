import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowWidgetComponent } from './yellow-widget.component';

describe('YellowWidgetComponent', () => {
  let component: YellowWidgetComponent;
  let fixture: ComponentFixture<YellowWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YellowWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YellowWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
