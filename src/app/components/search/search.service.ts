import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SearchService {

  private subject = new Subject<any>();

  onSearch(query: string) {
    this.subject.next({ query });
  }

  clearSearch() {
    this.subject.next();
  }

  getSearch(): Observable<any> {
    return this.subject.asObservable();
  }
}
