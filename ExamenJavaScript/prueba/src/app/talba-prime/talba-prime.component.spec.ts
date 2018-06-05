import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalbaPrimeComponent } from './talba-prime.component';

describe('TalbaPrimeComponent', () => {
  let component: TalbaPrimeComponent;
  let fixture: ComponentFixture<TalbaPrimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalbaPrimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalbaPrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
