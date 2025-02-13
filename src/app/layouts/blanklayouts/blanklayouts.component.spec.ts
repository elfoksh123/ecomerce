import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlanklayoutsComponent } from './blanklayouts.component';

describe('BlanklayoutsComponent', () => {
  let component: BlanklayoutsComponent;
  let fixture: ComponentFixture<BlanklayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlanklayoutsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlanklayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
