import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  constructor() { }
  
  getBookmarks() {
    return this.bookmarkList;
  }

  addToBookmarks(bookmark) {
    this.bookmarkList.push(bookmark);
    return this.bookmarkList;
  }

  clearBookmarks() {
    this.bookmarkList = [];
    return this.bookmarkList;
  }
}
