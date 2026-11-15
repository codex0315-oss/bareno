import Logo from './Logo.jsx';
import { profile } from '../data/portfolio.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo size={28} animate={false} />
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
        </div>
        <p className="mono footer__tag">
          {profile.tagline} <span className="accent">✦</span>
        </p>
        <a href="#home" className="footer__top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
