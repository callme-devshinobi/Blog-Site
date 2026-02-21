import { Component } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Post } from '../../models/blog.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  featuredPost: Post;
  sidePosts: Post[];
  latestPosts: Post[];

  constructor(private blogService: BlogService) {
    this.featuredPost = blogService.getFeaturedPost();
    this.sidePosts = blogService.getSidePosts();
    this.latestPosts = blogService.getLatestPosts(5).slice(1);
  }
}
