import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post';
import { PostsService } from 'src/app/post.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-post.component.html',
  styleUrls: ['./active-post.component.scss'],
})
export class ActivePostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postSrv: PostsService) {
    this.postSrv.recuperaPosts().then((posts) => {
      this.posts = posts;
    });
  }

  ngOnInit(): void {}
}
