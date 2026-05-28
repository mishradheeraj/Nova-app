import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forgetcomponent } from './forgetcomponent';

describe('Forgetcomponent', () => {
  let component: Forgetcomponent;
  let fixture: ComponentFixture<Forgetcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Forgetcomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Forgetcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
