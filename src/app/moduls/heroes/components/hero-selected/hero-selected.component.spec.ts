import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSelectedComponent } from './hero-selected.component';

describe('HeroSelectedComponent', () => {
  let component: HeroSelectedComponent;
  let fixture: ComponentFixture<HeroSelectedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroSelectedComponent]
    });
    fixture = TestBed.createComponent(HeroSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
