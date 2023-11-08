import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonsPageComponent } from './dungeons-page.component';

describe('DungeonsPageComponent', () => {
  let component: DungeonsPageComponent;
  let fixture: ComponentFixture<DungeonsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DungeonsPageComponent]
    });
    fixture = TestBed.createComponent(DungeonsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
