import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoRComponent } from './codigo-r.component';

describe('CodigoRComponent', () => {
  let component: CodigoRComponent;
  let fixture: ComponentFixture<CodigoRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodigoRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigoRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
