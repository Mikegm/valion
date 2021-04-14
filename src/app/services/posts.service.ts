import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  reloadedPosts: any = [];

  getAllPosts(){
    const url = environment.server + environment.global + environment.posts.getPosts;
    return this.http.get(url);
  }

  createPost(post: any){
    const url = environment.server + environment.global + environment.posts.createPosts;
    return this.http.post(url, post);
  }
}
