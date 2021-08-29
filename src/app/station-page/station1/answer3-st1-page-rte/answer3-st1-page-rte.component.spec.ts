import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Answer3St1PageRteComponent } from './answer3-st1-page-rte.component';

describe('Answer3St1PageRteComponent', () => {
  let component: Answer3St1PageRteComponent;
  let fixture: ComponentFixture<Answer3St1PageRteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Answer3St1PageRteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Answer3St1PageRteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
