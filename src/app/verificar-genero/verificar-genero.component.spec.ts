import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarGeneroComponent } from './verificar-genero.component';

describe('VerificarGeneroComponent', () => {
  let component: VerificarGeneroComponent;
  let fixture: ComponentFixture<VerificarGeneroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerificarGeneroComponent]
    });
    fixture = TestBed.createComponent(VerificarGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
