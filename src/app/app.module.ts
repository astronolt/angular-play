import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BookmarksModule } from './module/bookmarks/bookmarks.module';

import { AppComponent } from './app.component';
import { DirectoryComponent } from './shared/components/directory/directory/directory.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookmarksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
