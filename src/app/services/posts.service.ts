import { Subject } from 'rxjs/Subject';
import { Post } from '../models/Post.model';
import * as firebase from 'firebase';
import { DataSnapshot } from 'firebase/database';
import { Injectable } from '@angular/core';

// @Injectable()
export class PostsService {

    posts: Post[] = [];
    postsSubject = new Subject<Post[]>();
    
    // private posts = [
    //     {
    //         title : 'Mon premier post',
    //         content : "Porro cupiditate laoreet eos hac tempora, amet lacus eros lobortis exercitationem excepteur! Veniam illo, ipsa! Alias iaculis molestias!",
    //         loveIts : 0,
    //         created_at: new Date()
    //       },
    //       {
    //         title : 'Mon deuxieme post',
    //         content : "Inceptos! Duis? Ante aspernatur? Modi egestas, nec felis quae quis luctus dolorem. Nisi luctus fringilla consectetuer wisi illum?",
    //         loveIts : 0,
    //         created_at: new Date()
    //       },
    //       {
    //         title : 'Encore un post',
    //         content : "Nemo saepe sagittis, dictumst harum quas mattis totam. Turpis adipisci.",
    //         loveIts : 0,
    //         created_at: new Date()
    //       }
    // ];

    emitPostsSubject(){
        this.postsSubject.next(this.posts.slice());
    }

    addPost(newPost : Post){
        this.posts.push(newPost);
        this.savePosts();
        this.emitPostsSubject();
    }

    deletePost(index: number){
        this.posts.splice(index, 1);
        this.savePosts();
        this.emitPostsSubject();
    }

    like(index: number){
        this.posts[index].loveIts+=1;
        this.savePosts();
        this.emitPostsSubject();
    }

    dislike(index: number){
        this.posts[index].loveIts-=1;
        this.savePosts();
        this.emitPostsSubject();
    }

    savePosts(){
        firebase.database().ref('/posts').set(this.posts);
    }

    getPosts(){
        firebase.database().ref('/posts')
            .on('value', (data: DataSnapshot) => {
                this.posts = data.val() ? data.val() : [];
                this.emitPostsSubject();
                }
            );
    }
}