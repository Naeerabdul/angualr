import { Component } from '@angular/core';
import { YoutubeService } from './sevices/youtube.service';
// import * as data from '../assets/data.json';ng generate service data
import { DataService } from './data.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

// import {thedata} from './Datase.json'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
//   Channels: any;
//   constructor( private youtube: YoutubeService) { }
//   ngOnInit() {
//     this.youtube.getChannel().subscribe((data) => {
//       this.Channels = data.items
// })
// }
    constructor(private dataService: DataService) { }
  data: any[] = [];
  videoIdA: string ="fyxNcAXXORI";
    ngOnInit(): void {
      this.dataService.getData().subscribe(data => {
        this.data = data.items;
      });
    }
    handleClick(itemId: string): void {
      this.videoIdA = itemId
}
}

