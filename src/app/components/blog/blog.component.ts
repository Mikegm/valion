import { PostsService } from './../../services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private postService: PostsService) { }

  posts: any = [];

  async ngOnInit() {
    this.retrieveAllPosts();
  }

  retrieveAllPosts(){
    this.postService.getAllPosts().subscribe(posts =>{
      this.posts = posts
    })
  }

}
