import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditplatComponent } from './editplat.component';

describe('EditplatComponent', () => {
  let component: EditplatComponent;
  let fixture: ComponentFixture<EditplatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditplatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditplatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
