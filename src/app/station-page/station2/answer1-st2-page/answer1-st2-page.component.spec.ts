import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Answer1St2PageComponent } from './answer1-st2-page.component';

describe('Answer1St2PageComponent', () => {
  let component: Answer1St2PageComponent;
  let fixture: ComponentFixture<Answer1St2PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Answer1St2PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Answer1St2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
