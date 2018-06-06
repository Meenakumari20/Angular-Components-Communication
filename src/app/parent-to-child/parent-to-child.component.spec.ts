import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentToChildComponent } from './parent-to-child.component';

describe('ParentToChildComponent', () => {
  let component: ParentToChildComponent;
  let fixture: ComponentFixture<ParentToChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentToChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentToChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
