import { Component, OnInit } from '@angular/core';
import { PostsService } from '@fotosgram/services';
import { Post } from '@fotosgram/types';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  posts: Post[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.loadPosts();
  }

  onClick() {}

  loadPosts(event: any = null) {
    this.postsService.getPosts().subscribe(({ posts, results }) => {
      this.posts.push(...posts);
      if (event) {
        event.target.complete();
      }
      if (results === 0) {
        event.target.disabled = true;
      }
    });
  }
}
