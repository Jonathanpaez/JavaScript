import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaDosComponent } from './entrada-dos.component';

describe('EntradaDosComponent', () => {
  let component: EntradaDosComponent;
  let fixture: ComponentFixture<EntradaDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntradaDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradaDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
