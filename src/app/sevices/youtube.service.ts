import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http: HttpClient) {}
    getChannel():Observable<any>{
return this.http.get<any>("https://www.googleapis.com/youtube/v3/search?key=AIzaSyDejmtO7NhveftOb0q2I7T83ADZMS90bz8&channelId=UC3mhUecusCu42TUv8TJNtEg&part=snippet,id&order=date&maxResults=20")
}
}



