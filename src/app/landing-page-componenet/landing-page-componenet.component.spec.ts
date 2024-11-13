import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponenetComponent } from './landing-page-componenet.component';

describe('LandingPageComponenetComponent', () => {
  let component: LandingPageComponenetComponent;
  let fixture: ComponentFixture<LandingPageComponenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageComponenetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
