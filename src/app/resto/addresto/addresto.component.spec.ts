import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrestoComponent } from './addresto.component';

describe('AddrestoComponent', () => {
  let component: AddrestoComponent;
  let fixture: ComponentFixture<AddrestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
