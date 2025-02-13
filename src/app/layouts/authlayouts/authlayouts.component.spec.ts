import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthlayoutsComponent } from './authlayouts.component';

describe('AuthlayoutsComponent', () => {
  let component: AuthlayoutsComponent;
  let fixture: ComponentFixture<AuthlayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthlayoutsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthlayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
