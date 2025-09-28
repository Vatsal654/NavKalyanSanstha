import React from 'react';
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

  return (
    <header className="sticky top-0 z-50 w-full bg-primary text-primary-foreground shadow-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link to="/" className="flex items-center gap-2">
            <img src="/images/logo.jpg" alt="Nav Kalyan Sanstha Logo" className="h-8 w-8 rounded-full bg-gray-200" />
            <div className="flex flex-col items-start">
              <span className="text-lg font-semibold text-primary-foreground">Nav Kalyan Sanstha</span>
              <span className="text-xs text-primary-foreground/80 -mt-1">Charity Organization</span>
            </div>
          </Link>
          <Link to="/donate-food" className="flex items-center gap-1 text-primary-foreground hover:text-accent transition-colors px-2 py-1 rounded-md">
            <QrCode className="h-4 w-4" />
            <span className="text-sm">Show QR</span>
          </Link>
        </div>
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium text-primary-foreground hover:text-accent transition-colors relative group ${
                location.pathname === item.path ? 'text-accent' : ''
              }`}
            >
              {item.name}
              {location.pathname === item.path && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transition-transform duration-300"></span>
              )}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          ))}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden text-primary-foreground hover:bg-accent hover:text-accent-foreground">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background">
            <div className="flex flex-col gap-4 py-6">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <img src="/images/logo.jpg" alt="Nav Kalyan Sanstha Logo" className="h-8 w-8 rounded-full bg-gray-200" />
                <div className="flex flex-col items-start">
                  <span className="text-lg font-semibold text-primary">Nav Kalyan Sanstha</span>
                  <span className="text-sm text-primary/80 -mt-1">Charity Organization</span>
                </div>
              </Link>
              <Link to="/donate-food" className="flex items-center gap-1 text-primary hover:text-accent transition-colors px-2 py-1 rounded-md justify-start">
                <QrCode className="h-4 w-4" />
                <span className="text-base">Show QR</span>
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-lg font-medium text-foreground hover:text-accent transition-colors"
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