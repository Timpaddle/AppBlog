import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';
import { Post } from '../models/Post.model';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  postsForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private postsService: PostsService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.postsForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSubmitForm(){
    const formValue = this.postsForm.value;
    // const title = this.postsForm.get('title').value;
    // const content = this.postsForm.get('content').value;
    // const newPost = new Post(title, content, 0, new Date);
    const newPost = new Post(
      formValue['title'],
      formValue['content'],
      0,
      new Date()
    )
    this.postsService.addPost(newPost);
    this.router.navigate(['/posts']);
  }

}
