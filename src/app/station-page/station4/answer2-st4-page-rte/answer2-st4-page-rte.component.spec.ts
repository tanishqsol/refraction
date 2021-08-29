import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Answer2St4PageRteComponent } from './answer2-st4-page-rte.component';

describe('Answer2St4PageRteComponent', () => {
  let component: Answer2St4PageRteComponent;
  let fixture: ComponentFixture<Answer2St4PageRteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Answer2St4PageRteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Answer2St4PageRteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
