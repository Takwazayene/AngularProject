import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListplatComponent } from './listplat.component';

describe('ListplatComponent', () => {
  let component: ListplatComponent;
  let fixture: ComponentFixture<ListplatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListplatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListplatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
