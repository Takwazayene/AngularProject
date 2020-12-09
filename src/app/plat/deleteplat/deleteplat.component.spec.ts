import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteplatComponent } from './deleteplat.component';

describe('DeleteplatComponent', () => {
  let component: DeleteplatComponent;
  let fixture: ComponentFixture<DeleteplatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteplatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteplatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
