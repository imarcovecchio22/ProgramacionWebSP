import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarNacionalidadComponent } from './verificar-nacionalidad.component';

describe('VerificarNacionalidadComponent', () => {
  let component: VerificarNacionalidadComponent;
  let fixture: ComponentFixture<VerificarNacionalidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerificarNacionalidadComponent]
    });
    fixture = TestBed.createComponent(VerificarNacionalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
