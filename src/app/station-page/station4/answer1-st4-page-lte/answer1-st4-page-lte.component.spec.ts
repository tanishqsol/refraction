import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Answer1St4PageLteComponent } from './answer1-st4-page-lte.component';

describe('Answer1St4PageLteComponent', () => {
  let component: Answer1St4PageLteComponent;
  let fixture: ComponentFixture<Answer1St4PageLteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Answer1St4PageLteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Answer1St4PageLteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
