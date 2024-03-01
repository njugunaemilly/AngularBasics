import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesAndServicesComponent } from './directives-and-services.component';

describe('DirectivesAndServicesComponent', () => {
  let component: DirectivesAndServicesComponent;
  let fixture: ComponentFixture<DirectivesAndServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivesAndServicesComponent]
    });
    fixture = TestBed.createComponent(DirectivesAndServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
