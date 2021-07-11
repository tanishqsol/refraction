import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Answer3PageComponent } from './answer3-page.component';

describe('Answer3PageComponent', () => {
  let component: Answer3PageComponent;
  let fixture: ComponentFixture<Answer3PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Answer3PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Answer3PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
