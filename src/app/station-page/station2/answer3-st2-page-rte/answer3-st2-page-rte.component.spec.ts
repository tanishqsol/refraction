import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Answer3St2PageRteComponent } from './answer3-st2-page-rte.component';

describe('Answer3St2PageRteComponent', () => {
  let component: Answer3St2PageRteComponent;
  let fixture: ComponentFixture<Answer3St2PageRteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Answer3St2PageRteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Answer3St2PageRteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
