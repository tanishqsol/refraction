import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Answer2St5PageRteComponent } from './answer2-st5-page-rte.component';

describe('Answer2St5PageRteComponent', () => {
  let component: Answer2St5PageRteComponent;
  let fixture: ComponentFixture<Answer2St5PageRteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Answer2St5PageRteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Answer2St5PageRteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
