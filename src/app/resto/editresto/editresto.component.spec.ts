import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrestoComponent } from './editresto.component';

describe('EditrestoComponent', () => {
  let component: EditrestoComponent;
  let fixture: ComponentFixture<EditrestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditrestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditrestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
