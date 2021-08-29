import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Answer1St5PageRteComponent } from './answer1-st5-page-rte.component';

describe('Answer1St5PageRteComponent', () => {
  let component: Answer1St5PageRteComponent;
  let fixture: ComponentFixture<Answer1St5PageRteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Answer1St5PageRteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Answer1St5PageRteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
