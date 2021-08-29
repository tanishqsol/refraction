import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Answer1St2PageRteComponent } from './answer1-st2-page-rte.component';

describe('Answer1St2PageRteComponent', () => {
  let component: Answer1St2PageRteComponent;
  let fixture: ComponentFixture<Answer1St2PageRteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Answer1St2PageRteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Answer1St2PageRteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
