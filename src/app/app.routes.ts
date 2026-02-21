import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryPostsComponent } from './pages/category-posts/category-posts.component';
import { PostComponent } from './pages/post/post.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/:name', component: CategoryPostsComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];