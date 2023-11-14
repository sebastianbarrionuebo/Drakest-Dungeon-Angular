import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoComposicionComponent } from './equipo-composicion.component';

describe('EquipoComposicionComponent', () => {
  let component: EquipoComposicionComponent;
  let fixture: ComponentFixture<EquipoComposicionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipoComposicionComponent]
    });
    fixture = TestBed.createComponent(EquipoComposicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
