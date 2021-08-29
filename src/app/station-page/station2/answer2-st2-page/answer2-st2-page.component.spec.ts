import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Answer2St2PageComponent } from './answer2-st2-page.component';

describe('Answer2St2PageComponent', () => {
  let component: Answer2St2PageComponent;
  let fixture: ComponentFixture<Answer2St2PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Answer2St2PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Answer2St2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
