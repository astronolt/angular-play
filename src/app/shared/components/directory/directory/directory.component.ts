import { Component } from '@angular/core';
import { LinkService } from '../../../../services/links/main.service';
import { BookmarkService } from '../../../../services/bookmarks/main.service';

import { Links } from '../../../../models/links';
import { Comments } from '../../../../models/comments';


@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent {
  linkList: Links[] = [];

  postList: [] = [];

  comments: Comments[] = [];

  constructor(
    private linkService: LinkService,
    private bookmarkService: BookmarkService
  ){ }

  ngOnInit(): void {
    this.linkList = this.linkService.getLinks();
    
    this.linkService.getComments().subscribe( res => {
      this.comments = res;
    });
  }

  addToBookmarks(bookmark: Links): void {
    this.bookmarkService.addToBookmarks(bookmark);
    alert("Added!");
  }
}
