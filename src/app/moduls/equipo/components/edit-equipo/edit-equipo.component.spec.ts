import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEquipoComponent } from './edit-equipo.component';

describe('EditEquipoComponent', () => {
  let component: EditEquipoComponent;
  let fixture: ComponentFixture<EditEquipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditEquipoComponent]
    });
    fixture = TestBed.createComponent(EditEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
