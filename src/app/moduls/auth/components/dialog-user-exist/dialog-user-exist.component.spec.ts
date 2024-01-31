import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUserExistComponent } from './dialog-user-exist.component';

describe('DialogUserExistComponent', () => {
  let component: DialogUserExistComponent;
  let fixture: ComponentFixture<DialogUserExistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogUserExistComponent]
    });
    fixture = TestBed.createComponent(DialogUserExistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
