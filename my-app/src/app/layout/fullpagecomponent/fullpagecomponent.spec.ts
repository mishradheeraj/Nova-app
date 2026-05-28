import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fullpagecomponent } from './fullpagecomponent';

describe('Fullpagecomponent', () => {
  let component: Fullpagecomponent;
  let fixture: ComponentFixture<Fullpagecomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fullpagecomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Fullpagecomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
