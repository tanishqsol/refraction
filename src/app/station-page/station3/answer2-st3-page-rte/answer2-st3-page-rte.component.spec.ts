import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Answer2St3PageRteComponent } from './answer2-st3-page-rte.component';

describe('Answer2St3PageRteComponent', () => {
  let component: Answer2St3PageRteComponent;
  let fixture: ComponentFixture<Answer2St3PageRteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Answer2St3PageRteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Answer2St3PageRteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
