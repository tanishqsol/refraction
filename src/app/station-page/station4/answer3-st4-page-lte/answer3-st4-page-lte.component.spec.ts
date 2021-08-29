import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Answer3St4PageLteComponent } from './answer3-st4-page-lte.component';

describe('Answer3St4PageLteComponent', () => {
  let component: Answer3St4PageLteComponent;
  let fixture: ComponentFixture<Answer3St4PageLteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Answer3St4PageLteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Answer3St4PageLteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
