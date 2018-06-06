import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtopChildComponent } from './ctop-child.component';

describe('CtopChildComponent', () => {
  let component: CtopChildComponent;
  let fixture: ComponentFixture<CtopChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtopChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtopChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
