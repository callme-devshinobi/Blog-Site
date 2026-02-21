import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-links">
          <a href="#">Privacy Policy</a>
          <span class="sep">|</span>
          <a href="#">Terms of Service</a>
          <span class="sep">|</span>
          <a href="#" class="follow">Follow Us</a>
        </div>
        <div class="footer-social">
          <a href="#" class="social-icon fb">
            <svg viewBox="0 0 24 24" fill="white" width="13" height="13"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
          </a>
          <a href="#" class="social-icon tw">
            <svg viewBox="0 0 24 24" fill="white" width="13" height="13"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
          </a>
          <a href="#" class="social-icon ig">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" width="13" height="13"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      border-top: 1px solid #e8e8e8;
      padding: 16px 20px;
      background: #fff;
      margin-top: 40px;
    }
    .footer-inner {
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .footer-links {
      display: flex;
      align-items: center;
      gap: 8px;
      flex: 1;
    }
    .footer-links a {
      color: #374151;
      text-decoration: none;
      font-size: 13px;
    }
    .footer-links a.follow { color: #1a5dc8; }
    .sep { color: #9ca3af; }
    .footer-social { display: flex; gap: 6px; }
    .social-icon {
      width: 26px; height: 26px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
    }
    .social-icon.fb { background: #1877f2; }
    .social-icon.tw { background: #1da1f2; }
    .social-icon.ig { background: #e1306c; }
  `]
})
export class FooterComponent {}
