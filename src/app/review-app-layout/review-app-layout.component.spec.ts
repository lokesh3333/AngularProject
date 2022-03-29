import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewAppLayoutComponent } from './review-app-layout.component';

describe('ReviewAppLayoutComponent', () => {
  let component: ReviewAppLayoutComponent;
  let fixture: ComponentFixture<ReviewAppLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewAppLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewAppLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
