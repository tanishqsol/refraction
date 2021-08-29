import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Answer2St3PageLteComponent } from './answer2-st3-page-lte.component';

describe('Answer2St3PageLteComponent', () => {
  let component: Answer2St3PageLteComponent;
  let fixture: ComponentFixture<Answer2St3PageLteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Answer2St3PageLteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Answer2St3PageLteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
