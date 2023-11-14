import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCampoComponent } from './edit-campo.component';

describe('EditCampoComponent', () => {
  let component: EditCampoComponent;
  let fixture: ComponentFixture<EditCampoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCampoComponent]
    });
    fixture = TestBed.createComponent(EditCampoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
