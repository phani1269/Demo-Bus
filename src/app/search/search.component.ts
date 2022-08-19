import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchKey = "";
  constructor(private _searchService:SearchService) { }

  ngOnInit(): void {
  }

  sendSearchKey() {
    this._searchService.searchKey.next(this.searchKey);
  }

}
