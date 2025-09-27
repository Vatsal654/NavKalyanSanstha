import React from 'react';
import { Phone, Mail, Instagram, Linkedin } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 text-sm">
      <div className="container flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
          <a href="tel:+919958349220" className="flex items-center gap-2 hover:underline transition-colors hover:text-accent">
            <Phone className="h-4 w-4" />
            <span>+919958349220</span>
          </a>
          <a href="mailto:navkalyansansthadelhi@gmail.com" className="flex items-center gap-2 hover:underline transition-colors hover:text-accent">
            <Mail className="h-4 w-4" />
            <span>navkalyansansthadelhi@gmail.com</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/nav.kalyan.sanstha/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/nav-kalyan-sanstha/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;