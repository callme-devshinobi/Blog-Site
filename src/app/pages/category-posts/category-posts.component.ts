import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { Post } from '../../models/blog.model';

@Component({
  selector: 'app-category-posts',
  templateUrl: './category-posts.component.html',
  styleUrls: ['./category-posts.component.css']
})
export class CategoryPostsComponent implements OnInit {
  categoryName = '';
  posts: Post[] = [];

  constructor(private route: ActivatedRoute, private blogService: BlogService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categoryName = params['name'];
      this.posts = this.blogService.posts.filter(
        p => p.category.toLowerCase() === this.categoryName.toLowerCase()
      );
    });
  }
}