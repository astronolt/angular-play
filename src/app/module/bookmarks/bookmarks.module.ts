import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksComponent } from './bookmarks.component';

import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    BookmarksComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    BookmarksComponent
  ]
})

export class BookmarksModule { }
