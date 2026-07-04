import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, HeartHandshake } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-primary via-primary to-[#10173a] text-primary-foreground">
      {/* Ambient gold/purple glow */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[60vw] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, hsl(var(--brand-gold)), transparent 70%)' }}
        aria-hidden="true"
      />
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-70" />

      <div className="container relative z-10 flex flex-col items-center gap-8 px-4 py-12 text-center md:px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/logo.jpg" alt="Seva Pravah Logo" className="h-12 w-12 rounded-full ring-2 ring-brand-gold/60 shadow-glow-gold" />
          <div className="flex flex-col items-start">
            <span className="text-xl font-display font-semibold tracking-wide">Seva Pravah</span>
            <span className="text-xs uppercase tracking-[0.16em] text-brand-gold/90">Together For A Better Tomorrow</span>
          </div>
        </Link>

        <p className="max-w-xl text-sm text-primary-foreground/75 flex items-center justify-center gap-2">
          <HeartHandshake className="h-4 w-4 text-brand-gold" />
          A non-profit, women-led initiative serving fresh, home-cooked meals with dignity across Delhi.
        </p>

        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
          <a
            href="tel:+919958349220"
            className="glass-soft flex items-center gap-2 rounded-full px-4 py-2 text-sm hover:text-brand-gold transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>+919958349220</span>
          </a>
          <a
            href="mailto:navkalyansansthadelhi@gmail.com"
            className="glass-soft flex items-center gap-2 rounded-full px-4 py-2 text-sm hover:text-brand-gold transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span>navkalyansansthadelhi@gmail.com</span>
          </a>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <Link to="/privacy-policy" className="text-sm text-primary-foreground/85 hover:text-brand-gold transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms-and-conditions" className="text-sm text-primary-foreground/85 hover:text-brand-gold transition-colors">
            Terms &amp; Conditions
          </Link>
          <a
            href="https://www.instagram.com/nav.kalyan.sanstha/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-primary-foreground/85 hover:text-brand-gold transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4" />
            <span>Instagram</span>
          </a>
        </nav>

        <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <p className="text-sm text-primary-foreground/70">
          &copy; {new Date().getFullYear()} Seva Pravah. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
