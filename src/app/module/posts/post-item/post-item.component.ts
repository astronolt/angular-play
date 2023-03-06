import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Posts } from "../../../models/posts";

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent {

  @Input() post: Posts;
  @Output() hidePost: EventEmitter<Posts> = new EventEmitter;

  constructor(){
    this.post = {
      id: 0,
      title: '',
      body: '',
      votes: 1,
    }
  }

  upvote(post: Posts){
    if(post.votes){
      post.votes += 1;
    }else{
      post.votes = 1;
    }
    return post;
  }

  downvote(post: Posts) {
    if(post.votes){
      post.votes -= 1;
    }else{
      post.votes = 1;
    }
    return post;
  }

  hide(post: Posts) {
    this.hidePost.emit(post);
    return post;
  }
}

