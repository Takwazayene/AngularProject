import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrestoComponent } from './listresto.component';

describe('ListrestoComponent', () => {
  let component: ListrestoComponent;
  let fixture: ComponentFixture<ListrestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListrestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListrestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
