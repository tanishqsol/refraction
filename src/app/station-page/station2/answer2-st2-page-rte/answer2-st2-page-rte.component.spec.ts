import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Answer2St2PageRteComponent } from './answer2-st2-page-rte.component';

describe('Answer2St2PageRteComponent', () => {
  let component: Answer2St2PageRteComponent;
  let fixture: ComponentFixture<Answer2St2PageRteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Answer2St2PageRteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Answer2St2PageRteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
