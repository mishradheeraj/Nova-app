import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Logincomponnet } from './logincomponnet';

describe('Logincomponnet', () => {
  let component: Logincomponnet;
  let fixture: ComponentFixture<Logincomponnet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Logincomponnet],
    }).compileComponents();

    fixture = TestBed.createComponent(Logincomponnet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
