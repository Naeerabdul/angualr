import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  bypassSecurityTrustResourceUrl(arg0: string): import("@angular/platform-browser").SafeResourceUrl | undefined {
    throw new Error('Method not implemented.');
  }
  private dataUrl = 'assets/data.json'; // Adjust the path to your JSON file

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }
}
