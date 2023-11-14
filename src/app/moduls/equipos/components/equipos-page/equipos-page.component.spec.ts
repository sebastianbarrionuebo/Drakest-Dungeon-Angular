import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposPageComponent } from './equipos-page.component';

describe('EquiposPageComponent', () => {
  let component: EquiposPageComponent;
  let fixture: ComponentFixture<EquiposPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquiposPageComponent]
    });
    fixture = TestBed.createComponent(EquiposPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
