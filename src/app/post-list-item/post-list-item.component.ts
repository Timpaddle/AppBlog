import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string; 
  @Input() postContent: string;
  @Input() postDate: Date;
  @Input() postLove: number;
  @Input() index: number;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
   
  }

  onLike(){
    // this.postLove+=1;
    this.postsService.like(this.index);
  }
  onDislike(){
    // this.postLove-=1;
    this.postsService.dislike(this.index);
  }

  onDelete(){
    this.postsService.deletePost(this.index);
  }
}
