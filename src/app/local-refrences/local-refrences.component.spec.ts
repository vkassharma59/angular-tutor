import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalRefrencesComponent } from './local-refrences.component';

describe('LocalRefrencesComponent', () => {
  let component: LocalRefrencesComponent;
  let fixture: ComponentFixture<LocalRefrencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalRefrencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalRefrencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
