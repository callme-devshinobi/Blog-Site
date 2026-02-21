# Blog-Site - Angular Frontend

A fully functional blog frontend built with Angular 17, matching the provided mockup designs.

## Pages
- **Home** (`/`) - Hero featured post, latest posts grid, sidebar
- **Categories** (`/categories`) - All blog categories in a grid
- **Post** (`/post/:id`) - Individual blog post with comments form

## Setup & Run

### Prerequisites
- Node.js 16+ 
- Angular CLI: `npm install -g @angular/cli`

### Install & Start
```bash
npm install
ng serve
```

Then open: `http://localhost:4200`

## Project Structure

```
src/app/
├── app.module.ts          # Main module
├── app.routes.ts          # Routing config
├── models/
│   └── blog.model.ts      # Post & Category interfaces
├── services/
│   └── blog.service.ts    # Blog data service
├── components/
│   ├── navbar/            # Top navigation bar
│   ├── footer/            # Footer with links
│   └── sidebar/           # Reusable sidebar widget
└── pages/
    ├── home/              # Home page
    ├── categories/        # Categories page
    └── post/              # Single post page
```

## Features
- Responsive two-column layout (content + sidebar)
- Hero featured post with image overlay
- Category grid with hover effects
- Blog post with inline images (via HTML content)
- Newsletter subscription inputs
- Comment form
- Active route highlighting in nav
- Unsplash images for all content
- All links navigate between pages

## Customization
Edit `src/app/services/blog.service.ts` to update:
- Blog posts (title, content, images, dates)
- Categories (name, description, cover image)
- Popular posts in sidebar

