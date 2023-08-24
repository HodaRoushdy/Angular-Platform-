import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LefSideComponent } from './lef-side.component';

describe('LefSideComponent', () => {
  let component: LefSideComponent;
  let fixture: ComponentFixture<LefSideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LefSideComponent]
    });
    fixture = TestBed.createComponent(LefSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
