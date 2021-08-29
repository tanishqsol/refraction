import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Answer3St5PageLteComponent } from './answer3-st5-page-lte.component';

describe('Answer3St5PageLteComponent', () => {
  let component: Answer3St5PageLteComponent;
  let fixture: ComponentFixture<Answer3St5PageLteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Answer3St5PageLteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Answer3St5PageLteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
