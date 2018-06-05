import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaUnoComponent } from './entrada-uno.component';

describe('EntradaUnoComponent', () => {
  let component: EntradaUnoComponent;
  let fixture: ComponentFixture<EntradaUnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntradaUnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradaUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
