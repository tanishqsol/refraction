import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Answer2St5PageLteComponent } from './answer2-st5-page-lte.component';

describe('Answer2St5PageLteComponent', () => {
  let component: Answer2St5PageLteComponent;
  let fixture: ComponentFixture<Answer2St5PageLteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Answer2St5PageLteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Answer2St5PageLteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
