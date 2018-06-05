import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselAnimeComponent } from './carrusel-anime.component';

describe('CarruselAnimeComponent', () => {
  let component: CarruselAnimeComponent;
  let fixture: ComponentFixture<CarruselAnimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarruselAnimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarruselAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
