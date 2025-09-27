import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary py-8 text-primary-foreground">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Nav Kalyan Sanstha. All rights reserved.
        </p>
        <nav className="flex gap-4">
          <Link to="/privacy-policy" className="text-sm hover:text-accent transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms-and-conditions" className="text-sm hover:text-accent transition-colors">
            Terms & Conditions
          </Link>
        </nav>
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/nav.kalyan.sanstha/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/nav-kalyan-sanstha/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;