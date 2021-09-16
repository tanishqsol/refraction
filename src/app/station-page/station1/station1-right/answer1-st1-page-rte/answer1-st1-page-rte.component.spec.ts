import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Answer1St1PageRteComponent } from './answer1-st1-page-rte.component';

describe('Answer1St1PageRteComponent', () => {
  let component: Answer1St1PageRteComponent;
  let fixture: ComponentFixture<Answer1St1PageRteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Answer1St1PageRteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Answer1St1PageRteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
