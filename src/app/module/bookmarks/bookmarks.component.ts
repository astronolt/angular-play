import { Component } from '@angular/core';
import { BookmarkService } from '../../services/bookmarks/main.service';
import { Links } from '../../models/links';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent {

  bookmarkList: Links[] = [];

  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit(): void {
    this.bookmarkList = this.bookmarkService.getBookmarks();
  }

  clearBookmarks(): void {
    this.bookmarkService.clearBookmarks();
    this.bookmarkList = [];
    alert("Cleared!");
  }
}
