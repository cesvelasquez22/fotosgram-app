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
  disableInfiniteScroll = false;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.loadPosts();
  }

  onClick() {}

  doRefresh(event: any) {
    this.posts = [];
    this.disableInfiniteScroll = false;
    this.loadPosts(event, true);
  }

  loadPosts(event: any = null, pull: boolean = false) {
    this.postsService.getPosts(pull).subscribe(({ posts, results }) => {
      this.posts.push(...posts);
      if (event) {
        event.target.complete();
      }
      if (results === 0) {
        this.disableInfiniteScroll = true;
      }
    });
  }
}
