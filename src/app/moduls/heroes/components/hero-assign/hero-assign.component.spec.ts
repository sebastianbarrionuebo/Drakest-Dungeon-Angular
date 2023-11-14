import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAssignComponent } from './hero-assign.component';

describe('HeroAssignComponent', () => {
  let component: HeroAssignComponent;
  let fixture: ComponentFixture<HeroAssignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroAssignComponent]
    });
    fixture = TestBed.createComponent(HeroAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
