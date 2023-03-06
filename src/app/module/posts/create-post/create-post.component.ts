import { Component, Output, EventEmitter } from '@angular/core';

import { Posts } from '../../../models/posts';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

  title: string = '';
  body: string = '';

  @Output() addPost: EventEmitter<Posts> = new EventEmitter()

  constructor(){}

  submitForm(): void{
    const post: Posts = {
      title: this.title,
      body: this.body,
    }

    this.addPost.emit(post);
    
    this.title = '';
    this.body = '';
  }

}
