import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookmarksModule } from './module/bookmarks/bookmarks.module';
import { PostsModule } from './module/posts/posts.module';

/*COMPONENTS*/
import { AppComponent } from './app.component';
import { DirectoryComponent } from './shared/components/directory/directory/directory.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DirectoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BookmarksModule,
    PostsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
