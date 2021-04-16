import { Component, OnInit } from '@angular/core';
import { PostsService } from './../../../services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  title: String = '';
  description: String = '';
  sendedFlag: boolean = false;
  
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
  }

  createPostToSend(){
    let postToSend = {
      title: this.title,
      description: this.description
    }

    this.postsService.createPost(postToSend).subscribe((result)=>{
      if(result) this.sendedFlag = true;
      this.clearFields();
      location.reload();
    })

  }

  clearFields(){
    this.title = "";
    this.description = "";
  }

}
