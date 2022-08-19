import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchKey: Subject<string> = new Subject<string>();

  constructor() { }
}
