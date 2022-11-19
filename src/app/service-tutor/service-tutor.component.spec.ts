import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTutorComponent } from './service-tutor.component';

describe('ServiceTutorComponent', () => {
  let component: ServiceTutorComponent;
  let fixture: ComponentFixture<ServiceTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceTutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
