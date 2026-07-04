import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, QrCode } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about-us' },
  { name: 'What We Do', path: '/what-we-do' },
  { name: 'Donate Food', path: '/donate-food' },
  { name: 'General Donations', path: '/general-donations' },
  { name: 'FAQs', path: '/faqs' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact Us', path: '/contact-us' },
];

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full text-primary-foreground transition-all duration-500 ${
        scrolled
          ? 'glass-dark shadow-premium'
          : 'bg-primary/90 backdrop-blur-md border-b border-white/10'
      }`}
    >
      {/* Subtle gold gradient line under the navbar */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-70" />
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4 flex-shrink-0">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/images/logo.jpg"
              alt="Seva Pravah Logo"
              className="h-11 w-11 rounded-full ring-2 ring-brand-gold/60 shadow-glow-gold transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col items-start">
              <span className="text-lg font-display font-semibold text-primary-foreground whitespace-nowrap tracking-wide">
                Seva Pravah
              </span>
              <span className="text-[11px] uppercase tracking-[0.14em] text-brand-gold/90 -mt-1 whitespace-nowrap">
                Together For A Better Tomorrow
              </span>
            </div>
          </Link>
          <Button asChild variant="ghost" size="sm" className="hidden lg:flex text-primary-foreground hover:text-accent hover:bg-white/10 px-2">
            <Link to="/donate-food#donation-qr-section" className="flex items-center gap-1">
              <QrCode className="h-4 w-4" />
              <span className="text-sm whitespace-nowrap">Show QR</span>
            </Link>
          </Button>
        </div>
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-base font-medium whitespace-nowrap text-primary-foreground/90 hover:text-brand-gold transition-colors relative group ${
                location.pathname === item.path ? 'text-brand-gold' : ''
              }`}
            >
              {item.name}
              {location.pathname === item.path && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full bg-brand-gold transition-transform duration-300"></span>
              )}
              <span className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          ))}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden bg-white/15 border-white/30 text-primary-foreground hover:bg-brand-gold hover:text-accent-foreground">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="glass border-l border-white/40">
            <div className="flex flex-col gap-4 py-6">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <img src="/images/logo.jpg" alt="Seva Pravah Logo" className="h-10 w-10 rounded-full ring-2 ring-brand-gold/60" />
                <div className="flex flex-col items-start">
                  <span className="text-lg font-display font-semibold text-primary">Seva Pravah</span>
                  <span className="text-[11px] uppercase tracking-[0.12em] text-brand-purple -mt-1">Together For A Better Tomorrow</span>
                </div>
              </Link>
              <Button asChild variant="ghost" size="sm" className="text-primary hover:text-accent hover:bg-white/30 px-2 justify-start">
                <Link to="/donate-food#donation-qr-section" className="flex items-center gap-1">
                  <QrCode className="h-4 w-4" />
                  <span className="text-base">Show QR</span>
                </Link>
              </Button>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-lg font-medium text-foreground hover:text-brand-purple transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
