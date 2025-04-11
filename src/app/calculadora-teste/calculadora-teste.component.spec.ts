import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraTesteComponent } from './calculadora-teste.component';

describe('CalculadoraTesteComponent', () => {
  let component: CalculadoraTesteComponent;
  let fixture: ComponentFixture<CalculadoraTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraTesteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
