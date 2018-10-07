import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenWidgetComponent } from './green-widget.component';

describe('GreenWidgetComponent', () => {
  let component: GreenWidgetComponent;
  let fixture: ComponentFixture<GreenWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
