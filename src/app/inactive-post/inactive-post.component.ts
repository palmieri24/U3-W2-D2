import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post';
import { PostsService } from 'src/app/post.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-post.component.html',
  styleUrls: ['./inactive-post.component.scss'],
})
export class InactivePostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postSrv: PostsService) {
    this.postSrv.recuperaPosts().then((posts) => {
      this.posts = posts;
    });
  }

  ngOnInit(): void {}
}
