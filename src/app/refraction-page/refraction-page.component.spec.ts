import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefractionPageComponent } from './refraction-page.component';

describe('RefractionPageComponent', () => {
  let component: RefractionPageComponent;
  let fixture: ComponentFixture<RefractionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefractionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefractionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
