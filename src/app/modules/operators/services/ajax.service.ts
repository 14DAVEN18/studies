import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { ajax } from 'rxjs/ajax'

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor() { }

  // Example with public test API
  public getMockData(): Observable<any> {
    return ajax({
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      method: 'GET'
    }).pipe(delay(2000))
  }

  // Example with mock data
  public fetchMockDataInline(): Observable<any> {
    return of({ id: 1, title: 'Mock Title', body: 'Mock body content' });
  }
}
