import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Station5Component } from './station5.component';

describe('Station5Component', () => {
  let component: Station5Component;
  let fixture: ComponentFixture<Station5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Station5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Station5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
