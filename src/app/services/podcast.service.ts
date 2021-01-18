import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Podcast} from '../models/podcast';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {
  private fileUrl = './assets/data/data.json';
  private testUrl = `http://echo.jsontest.com/key/value/one/two`;

  constructor(private http: HttpClient) {
  }

  getPodcasts(): Observable<Podcast[]> {
    return this.http.get<Podcast[]>(this.fileUrl);
  }
}
