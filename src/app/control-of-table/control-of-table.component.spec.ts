import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlOfTableComponent } from './control-of-table.component';

describe('ControlOfTableComponent', () => {
  let component: ControlOfTableComponent;
  let fixture: ComponentFixture<ControlOfTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlOfTableComponent]
    });
    fixture = TestBed.createComponent(ControlOfTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
