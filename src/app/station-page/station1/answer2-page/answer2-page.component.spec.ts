import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Answer2PageComponent } from './answer2-page.component';

describe('Answer2PageComponent', () => {
  let component: Answer2PageComponent;
  let fixture: ComponentFixture<Answer2PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Answer2PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Answer2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
