import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtocChildComponent } from './ptoc-child.component';

describe('PtocChildComponent', () => {
  let component: PtocChildComponent;
  let fixture: ComponentFixture<PtocChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtocChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtocChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
