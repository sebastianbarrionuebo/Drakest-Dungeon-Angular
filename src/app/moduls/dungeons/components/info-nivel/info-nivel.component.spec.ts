import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoNivelComponent } from './info-nivel.component';

describe('InfoNivelComponent', () => {
  let component: InfoNivelComponent;
  let fixture: ComponentFixture<InfoNivelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoNivelComponent]
    });
    fixture = TestBed.createComponent(InfoNivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
