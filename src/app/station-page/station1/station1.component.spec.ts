import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Station1Component } from './station1.component';

describe('Station1Component', () => {
  let component: Station1Component;
  let fixture: ComponentFixture<Station1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Station1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Station1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
