import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { Post } from '../../models/blog.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post?: Post;
  comment = { name: '', email: '', website: '', comment: '' };

  constructor(private route: ActivatedRoute, private blogService: BlogService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.post = this.blogService.getPostById(+params['id']);
    });
  }

  submitComment() {
    alert('Comment posted!');
    this.comment = { name: '', email: '', website: '', comment: '' };
  }
}
