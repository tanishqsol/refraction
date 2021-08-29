import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Answer1St3PageLteComponent } from './answer1-st3-page-lte.component';

describe('Answer1St3PageLteComponent', () => {
  let component: Answer1St3PageLteComponent;
  let fixture: ComponentFixture<Answer1St3PageLteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Answer1St3PageLteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Answer1St3PageLteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
