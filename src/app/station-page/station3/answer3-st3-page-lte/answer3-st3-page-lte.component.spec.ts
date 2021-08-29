import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Answer3St3PageLteComponent } from './answer3-st3-page-lte.component';

describe('Answer3St3PageLteComponent', () => {
  let component: Answer3St3PageLteComponent;
  let fixture: ComponentFixture<Answer3St3PageLteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Answer3St3PageLteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Answer3St3PageLteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
