import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarLibroComponent } from './administrar-libro.component';

describe('AdministrarLibroComponent', () => {
  let component: AdministrarLibroComponent;
  let fixture: ComponentFixture<AdministrarLibroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministrarLibroComponent]
    });
    fixture = TestBed.createComponent(AdministrarLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
