import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaProdutosFormComponent } from './tabela-produtos-form.component';

describe('TabelaProdutosFormComponent', () => {
  let component: TabelaProdutosFormComponent;
  let fixture: ComponentFixture<TabelaProdutosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaProdutosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaProdutosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
