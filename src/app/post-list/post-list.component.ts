import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Subscription } from 'rxjs/Subscription';
import { Post } from '../models/Post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit, OnDestroy {

  // @Input() posts;
  posts: any[];
  postsSubscription: Subscription;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts();
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.emitPostsSubject();
  }

  ngOnDestroy(){
    this.postsSubscription.unsubscribe();
  }

  

}
