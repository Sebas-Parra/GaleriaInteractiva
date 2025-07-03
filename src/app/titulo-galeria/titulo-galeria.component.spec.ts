import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloGaleriaComponent } from './titulo-galeria.component';

describe('TituloGaleriaComponent', () => {
  let component: TituloGaleriaComponent;
  let fixture: ComponentFixture<TituloGaleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TituloGaleriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
