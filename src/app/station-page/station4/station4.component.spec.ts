import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Station4Component } from './station4.component';

describe('Station4Component', () => {
  let component: Station4Component;
  let fixture: ComponentFixture<Station4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Station4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Station4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
