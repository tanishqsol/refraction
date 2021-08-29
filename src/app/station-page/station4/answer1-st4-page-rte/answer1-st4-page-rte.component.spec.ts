import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Answer1St4PageRteComponent } from './answer1-st4-page-rte.component';

describe('Answer1St4PageRteComponent', () => {
  let component: Answer1St4PageRteComponent;
  let fixture: ComponentFixture<Answer1St4PageRteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Answer1St4PageRteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Answer1St4PageRteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
