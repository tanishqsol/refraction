import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Answer1St5PageLteComponent } from './answer1-st5-page-lte.component';

describe('Answer1St5PageLteComponent', () => {
  let component: Answer1St5PageLteComponent;
  let fixture: ComponentFixture<Answer1St5PageLteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Answer1St5PageLteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Answer1St5PageLteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
