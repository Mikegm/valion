import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoLlamadaComponent } from './video-llamada.component';

describe('VideoLlamadaComponent', () => {
  let component: VideoLlamadaComponent;
  let fixture: ComponentFixture<VideoLlamadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoLlamadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoLlamadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
