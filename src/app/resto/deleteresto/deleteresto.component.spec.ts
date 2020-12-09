import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleterestoComponent } from './deleteresto.component';

describe('DeleterestoComponent', () => {
  let component: DeleterestoComponent;
  let fixture: ComponentFixture<DeleterestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleterestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleterestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
