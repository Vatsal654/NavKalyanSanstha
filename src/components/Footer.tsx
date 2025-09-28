import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary py-8 text-primary-foreground">
      <div className="container flex flex-col items-center gap-6 px-4 text-center md:px-6">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <a
            href="tel:+919958349220"
            className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>+919958349220</span>
          </a>
          <a
            href="mailto:navkalyansansthadelhi@gmail.com"
            className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span>navkalyansansthadelhi@gmail.com</span>
          </a>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <Link to="/privacy-policy" className="text-sm hover:text-accent transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms-and-conditions" className="text-sm hover:text-accent transition-colors">
            Terms & Conditions
          </Link>
          <a
            href="https://www.instagram.com/nav.kalyan.sanstha/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm hover:text-accent transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4" />
            <span>Instagram</span>
          </a>
        </nav>
        <p className="text-sm text-primary-foreground/80">
          &copy; {new Date().getFullYear()} Nav Kalyan Sanstha. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;