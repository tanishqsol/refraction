import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Answer3St4PageRteComponent } from './answer3-st4-page-rte.component';

describe('Answer3St4PageRteComponent', () => {
  let component: Answer3St4PageRteComponent;
  let fixture: ComponentFixture<Answer3St4PageRteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Answer3St4PageRteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Answer3St4PageRteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
