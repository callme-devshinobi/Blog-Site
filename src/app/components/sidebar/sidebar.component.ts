import { Component, Input } from '@angular/core';
import { Post } from '../../models/blog.model';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() showPopular = false;
  email = '';
  categories: string[] = ['Travel', 'Lifestyle', 'Wellness', 'Food', 'Tech'];
  popularPosts: Post[];

  constructor(private blogService: BlogService) {
    this.popularPosts = blogService.popularPosts;
  }
}
