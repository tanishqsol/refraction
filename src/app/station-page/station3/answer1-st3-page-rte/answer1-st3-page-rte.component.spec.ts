import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Answer1St3PageRteComponent } from './answer1-st3-page-rte.component';

describe('Answer1St3PageRteComponent', () => {
  let component: Answer1St3PageRteComponent;
  let fixture: ComponentFixture<Answer1St3PageRteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Answer1St3PageRteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Answer1St3PageRteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
