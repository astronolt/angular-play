import { Injectable } from '@angular/core';
import { Links } from '../../models/links';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  bookmarkList: Links[] = [];

  constructor() { }

  getBookmarks() {
    return this.bookmarkList;
  }

  addToBookmarks(bookmark: Links) {
    this.bookmarkList.push(bookmark);
    return this.bookmarkList;
  }

  clearBookmarks() {
    this.bookmarkList = [];
    return this.bookmarkList;
  }

}
