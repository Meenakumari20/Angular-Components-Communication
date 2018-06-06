import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingsComponent } from './siblings.component';

describe('SiblingsComponent', () => {
  let component: SiblingsComponent;
  let fixture: ComponentFixture<SiblingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiblingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiblingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
