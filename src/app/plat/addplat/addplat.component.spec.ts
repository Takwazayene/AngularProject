import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddplatComponent } from './addplat.component';

describe('AddplatComponent', () => {
  let component: AddplatComponent;
  let fixture: ComponentFixture<AddplatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddplatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddplatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
