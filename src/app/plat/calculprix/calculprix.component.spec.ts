import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculprixComponent } from './calculprix.component';

describe('CalculprixComponent', () => {
  let component: CalculprixComponent;
  let fixture: ComponentFixture<CalculprixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculprixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculprixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
