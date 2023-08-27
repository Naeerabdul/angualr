import { Component,Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
  @Input()
  videoIdA: any | "dvoUvTIrbC4";

  videoId: any = 'dvoUvTIrbC4'; // Replace with your video ID
  videoUrl: SafeResourceUrl;


  toggle(todo: {}) {
  }

  constructor(private sanitizer: DomSanitizer) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.videoId}`);
    console.log (this.videoIdA,"videoIdA")
       console.log (this.videoId,"videoId")

  }
}

