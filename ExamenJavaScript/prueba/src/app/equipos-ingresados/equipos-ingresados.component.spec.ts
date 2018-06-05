import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposIngresadosComponent } from './equipos-ingresados.component';

describe('EquiposIngresadosComponent', () => {
  let component: EquiposIngresadosComponent;
  let fixture: ComponentFixture<EquiposIngresadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquiposIngresadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquiposIngresadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
