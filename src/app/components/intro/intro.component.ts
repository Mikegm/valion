import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  host: {
    'autoplay': '',
    'oncanplay': 'this.play()',
    'onloadedmetadata': 'this.muted = true'
}
})
export class IntroComponent implements OnInit {
  @ViewChild('videoPlayer') videoPlayer: ElementRef;

  videoClicked = false;

  startVideo(): void {
      this.videoClicked = true;
      this.videoPlayer.nativeElement.play();
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
