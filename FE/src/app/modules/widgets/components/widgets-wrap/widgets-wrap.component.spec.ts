import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgeetsWrapComponent } from './widgets-wrap.component';

describe('WidgeetsWrapComponent', () => {
  let component: WidgeetsWrapComponent;
  let fixture: ComponentFixture<WidgeetsWrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgeetsWrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgeetsWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
