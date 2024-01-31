import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

interface WikiDataResponse {
  query: {
    search: {
      ns: number;
      pageid: number;
      size: number;
      snippet: string;
      timestamp: string;
      title: string;
      wordcount: number;
    }[]
  }
}

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor(private http: HttpClient) {}

  search(term: string) {
    return this.http.get<WikiDataResponse>('https://www.mediawiki.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*',
      },
    }).pipe(
      map((value) => value.query.search),
    );
  }
}
