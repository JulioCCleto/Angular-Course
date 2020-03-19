import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultIfComponent } from './result-if.component';

describe('ResultIfComponent', () => {
  let component: ResultIfComponent;
  let fixture: ComponentFixture<ResultIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
