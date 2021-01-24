import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompromisoComponent } from './compromiso.component';

describe('CompromisoComponent', () => {
  let component: CompromisoComponent;
  let fixture: ComponentFixture<CompromisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompromisoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompromisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
