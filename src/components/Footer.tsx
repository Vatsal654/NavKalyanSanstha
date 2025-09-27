import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 dark:bg-gray-800">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Nav Kalyan Sanstha. All rights reserved.
        </p>
        <nav className="flex gap-4">
          <Link to="/privacy-policy" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary-foreground transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms-and-conditions" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary-foreground transition-colors">
            Terms & Conditions
          </Link>
        </nav>
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/nav.kalyan.sanstha/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary-foreground transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/company/nav-kalyan-sanstha-delhi" // Mock LinkedIn link
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary-foreground transition-colors"
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