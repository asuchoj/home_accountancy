import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedWidgetComponent } from './red-widget.component';

describe('RedWidgetComponent', () => {
  let component: RedWidgetComponent;
  let fixture: ComponentFixture<RedWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
