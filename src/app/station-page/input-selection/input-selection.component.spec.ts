import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSelectionComponent } from './input-selection.component';

describe('InputSelectionComponent', () => {
  let component: InputSelectionComponent;
  let fixture: ComponentFixture<InputSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
