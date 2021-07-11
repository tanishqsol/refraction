import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Answer1PageComponent } from './answer1-page.component';

describe('Answer1PageComponent', () => {
  let component: Answer1PageComponent;
  let fixture: ComponentFixture<Answer1PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Answer1PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Answer1PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
