import { Component } from '@angular/core';
import { PostsService } from '@fotosgram/services';
import { Post } from '@fotosgram/types';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  posts: Post[] = [];

  constructor(private postsService: PostsService) {
    this.postsService.getPosts().subscribe(({ posts }) => (this.posts = posts));
  }

  onClick() {}
}
