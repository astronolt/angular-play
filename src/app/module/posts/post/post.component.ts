import { Component } from '@angular/core';

import { Posts } from '../../../models/posts';
import { LinkService } from '../../../services/links/main.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {

  title: string = 'Post';
  posts:  Posts[] = [];

  constructor(
    private LinkService: LinkService,
  ){}

  ngOnInit(): void{
    this.LinkService.getPosts().subscribe( res => {
      for (let index = 0; index < res.length; index++) {
        const post = res[index];
        post["votes"] = 1;
      }

      this.posts = res;
    })
  }

  addPost(post: Posts): void{
    this.posts.unshift(post);
    alert('Post Added!');
  }

  hidePost(post: Posts): void{
    this.posts = this.posts.filter(p => p.id !== post.id);
  }
}
