import { Component } from '@angular/core';
import { LinkService } from '../../../../services/links/main.service';
import { BookmarkService } from '../../../../services/bookmarks/main.service';

import { Links } from '../../../../models/links';


@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent {
  linkList: Links[] = [];

  constructor(
    private linkService: LinkService,
    private bookmarkService: BookmarkService
  ){ }

  ngOnInit(): void {
    this.linkList = this.linkService.getLinks();
  }

  addToBookmarks(bookmark: Links): void {
    this.bookmarkService.addToBookmarks(bookmark);
    alert("Added!");
  }
}
