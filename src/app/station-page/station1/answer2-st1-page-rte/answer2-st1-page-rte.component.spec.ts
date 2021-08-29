import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Answer2St1PageRteComponent } from './answer2-st1-page-rte.component';

describe('Answer2St1PageRteComponent', () => {
  let component: Answer2St1PageRteComponent;
  let fixture: ComponentFixture<Answer2St1PageRteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Answer2St1PageRteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Answer2St1PageRteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
