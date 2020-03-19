import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForSegundoComponent } from './ng-for-segundo.component';

describe('NgForSegundoComponent', () => {
  let component: NgForSegundoComponent;
  let fixture: ComponentFixture<NgForSegundoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForSegundoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForSegundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
