import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDugenonComponent } from './info-dugenon.component';

describe('InfoDugenonComponent', () => {
  let component: InfoDugenonComponent;
  let fixture: ComponentFixture<InfoDugenonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoDugenonComponent]
    });
    fixture = TestBed.createComponent(InfoDugenonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
