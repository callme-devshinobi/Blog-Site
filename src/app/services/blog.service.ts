import { Injectable } from '@angular/core';
import { Post, Category } from '../models/blog.model';

@Injectable({ providedIn: 'root' })
export class BlogService {
  categories: Category[] = [
    {
      name: 'Travel',
      description: 'Travel guides, tips, and destination ideas to inspire your next adventure.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80'
    },
    {
      name: 'Lifestyle',
      description: 'Tips and articles on home decor, productivity, fashion, and personal development.',
      image: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=600&q=80'
    },
    {
      name: 'Wellness',
      description: 'Advice on fitness, nutrition, mental health, and overall wellbeing.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80'
    },
    {
      name: 'Food',
      description: 'Delicious recipes, cooking tips, and food inspiration for every taste.',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80'
    },
    {
      name: 'Tech',
      description: 'Tech news, gadgets, and trends in the world of technology and innovation.',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80'
    }
  ];

  posts: Post[] = [
    {
      id: 1,
      title: 'Explore the World:',
      subtitle: 'Top 10 Travel Destinations for 2022',
      excerpt: 'Discover the best places to visit this year and plan your next adventure.',
      content: `<p>Are you ready for an adventure in 2022? Whether you're dreaming of pristine beaches, historic cities, or breathtaking landscapes, we've compiled a list of the top 10 travel destinations for the year. These places offer a mix of culture, adventure, and relaxation, perfect for your next getaway.</p>
      <h2>1. Bali, Indonesia</h2>
      <img src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80" alt="Bali Temple" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum, lacus a tincidunt scelerisque, erat erat aliquam elit, in porttitor neque velit sit amet libero. Discover beautiful beaches, vibrant culture, and lush landscapes in Bali. Don't forget to visit the famous Uluwatu Temple and the rice terraces of Tegallalang.</p>
      <img src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80" alt="Bali Nature" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum, lacus a tincidunt scelerisque, erat erat aliquam elit, in porttitor neque velit sit amet libero. Discover beautiful beaches, vibrant culture, and lush landscapes in Bali. Don't forget to visit the famous Uluwatu Temple and the rice terraces of Tegallalang.</p>`,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80',
      category: 'Travel',
      author: 'Jane Doe',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&q=80&fit=crop',
      date: 'April 15, 2022',
      readTime: '8 minutes',
      tags: ['travel', 'destinations', 'adventure']
    },
    {
      id: 2,
      title: 'Healthy Living Tips:',
      subtitle: 'How to Stay Fit & Energized',
      excerpt: 'Discover effective strategies for maintaining a healthy, energized lifestyle.',
      image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600&q=80',
      category: 'Wellness',
      author: 'Jane Doe',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&q=80&fit=crop',
      date: 'April 10, 2022',
      readTime: '5 minutes',
      tags: ['health', 'fitness', 'wellness']
    },
    {
      id: 3,
      title: 'The Future of Technology:',
      subtitle: "What's Next in 2022",
      excerpt: 'Explore the cutting-edge technologies shaping our world.',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80',
      category: 'Tech',
      author: 'Jane Doe',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&q=80&fit=crop',
      date: 'April 8, 2022',
      readTime: '6 minutes',
      tags: ['tech', 'future', 'innovation']
    },
    {
      id: 4,
      title: 'The Art of Mindfulness:',
      subtitle: 'Finding Peace in a Busy World',
      excerpt: 'Learn how to cultivate mindfulness and find inner peace.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80',
      category: 'Wellness',
      author: 'Jane Doe',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&q=80&fit=crop',
      date: 'April 12, 2022',
      readTime: '4 minutes'
    },
    {
      id: 5,
      title: 'Easy & Delicious Recipes',
      subtitle: 'For Quick Dinners',
      excerpt: 'Whip up these tasty meals in under 30 minutes.',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      category: 'Food',
      author: 'Jane Doe',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&q=80&fit=crop',
      date: 'April 5, 2022',
      readTime: '3 minutes'
    },
    {
      id: 6,
      title: 'Home Office Ideas:',
      subtitle: 'Create Your Perfect Workspace',
      excerpt: 'Transform your home office into a productive haven.',
      image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80',
      category: 'Lifestyle',
      author: 'Jane Doe',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&q=80&fit=crop',
      date: 'April 5, 2022',
      readTime: '5 minutes'
    },
    {
      id: 7,
      title: 'Outdoor Adventures:',
      subtitle: 'Hiking Tips for Beginners',
      excerpt: 'Everything you need to know before hitting the trails.',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&q=80',
      category: 'Travel',
      author: 'Jane Doe',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&q=80&fit=crop',
      date: 'April 3, 2022',
      readTime: '6 minutes'
    },
    {
      id: 8,
      title: 'Hiking Tips for Beginners',
      subtitle: '',
      excerpt: 'Start your hiking journey with these essential tips and tricks.',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&q=80',
      category: 'Travel',
      author: 'Jane Doe',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&q=80&fit=crop',
      date: 'April 3, 2022',
      readTime: '5 minutes'
    }
  ];

  popularPosts: Post[] = [
    {
      id: 9,
      title: '10 Productivity Hacks for a Better Workday',
      excerpt: '',
      image: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=100&q=80',
      category: 'Lifestyle',
      author: 'Jane Doe',
      authorAvatar: '',
      date: '',
      readTime: ''
    },
    {
      id: 10,
      title: 'The Best Books to Read This Year',
      excerpt: '',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=100&q=80',
      category: 'Lifestyle',
      author: 'Jane Doe',
      authorAvatar: '',
      date: '',
      readTime: ''
    },
    {
      id: 11,
      title: 'Travel Photography: Capturing the Perfect Shot',
      excerpt: '',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&q=80',
      category: 'Travel',
      author: 'Jane Doe',
      authorAvatar: '',
      date: '',
      readTime: ''
    }
  ];

  getPostById(id: number): Post | undefined {
    return this.posts.find(p => p.id === id);
  }

  getLatestPosts(count: number = 6): Post[] {
    return this.posts.slice(0, count);
  }

  getFeaturedPost(): Post {
    return this.posts[0];
  }

  getSidePosts(): Post[] {
    return [this.posts[1], this.posts[2]];
  }
} 
