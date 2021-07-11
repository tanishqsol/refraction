import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Station2Component } from './station2.component';

describe('Station2Component', () => {
  let component: Station2Component;
  let fixture: ComponentFixture<Station2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Station2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Station2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
