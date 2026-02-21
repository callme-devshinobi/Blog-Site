import { Component } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Category } from '../../models/blog.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories: Category[];

  constructor(private blogService: BlogService) {
    this.categories = blogService.categories;
  }
}
