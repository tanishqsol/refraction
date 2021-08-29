import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Answer3St3PageRteComponent } from './answer3-st3-page-rte.component';

describe('Answer3St3PageRteComponent', () => {
  let component: Answer3St3PageRteComponent;
  let fixture: ComponentFixture<Answer3St3PageRteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Answer3St3PageRteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Answer3St3PageRteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
