import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrategiasComponent } from './estrategias.component';

describe('EstrategiasComponent', () => {
  let component: EstrategiasComponent;
  let fixture: ComponentFixture<EstrategiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstrategiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstrategiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
