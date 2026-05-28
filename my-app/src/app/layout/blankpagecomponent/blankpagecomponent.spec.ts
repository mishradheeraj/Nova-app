import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blankpagecomponent } from './blankpagecomponent';

describe('Blankpagecomponent', () => {
  let component: Blankpagecomponent;
  let fixture: ComponentFixture<Blankpagecomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blankpagecomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Blankpagecomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
