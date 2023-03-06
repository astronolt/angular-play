import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostComponent } from './post/post.component';
import { PostItemComponent } from './post-item/post-item.component';



@NgModule({
  declarations: [
    CreatePostComponent,
    PostComponent,
    PostItemComponent
  ],
  imports: [
    CommonModule,    
    FormsModule
  ],
  exports:[
    PostComponent,
  ]
})
export class PostsModule { }
