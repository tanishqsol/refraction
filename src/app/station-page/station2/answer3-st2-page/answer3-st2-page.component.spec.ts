import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Answer3St2PageComponent } from './answer3-st2-page.component';

describe('Answer3St2PageComponent', () => {
  let component: Answer3St2PageComponent;
  let fixture: ComponentFixture<Answer3St2PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Answer3St2PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Answer3St2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
