import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Answer3St5PageRteComponent } from './answer3-st5-page-rte.component';

describe('Answer3St5PageRteComponent', () => {
  let component: Answer3St5PageRteComponent;
  let fixture: ComponentFixture<Answer3St5PageRteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Answer3St5PageRteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Answer3St5PageRteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
