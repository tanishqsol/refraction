import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Station1RightComponent } from './station1-right.component';

describe('Station1RightComponent', () => {
  let component: Station1RightComponent;
  let fixture: ComponentFixture<Station1RightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Station1RightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Station1RightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
