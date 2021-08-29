import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Answer2St4PageLteComponent } from './answer2-st4-page-lte.component';

describe('Answer2St4PageLteComponent', () => {
  let component: Answer2St4PageLteComponent;
  let fixture: ComponentFixture<Answer2St4PageLteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Answer2St4PageLteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Answer2St4PageLteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
