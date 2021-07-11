import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Station3Component } from './station3.component';

describe('Station3Component', () => {
  let component: Station3Component;
  let fixture: ComponentFixture<Station3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Station3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Station3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
