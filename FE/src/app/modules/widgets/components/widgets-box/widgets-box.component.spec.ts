import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsBoxComponent } from './widgets-box.component';

describe('WidgetsBoxComponent', () => {
  let component: WidgetsBoxComponent;
  let fixture: ComponentFixture<WidgetsBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetsBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
