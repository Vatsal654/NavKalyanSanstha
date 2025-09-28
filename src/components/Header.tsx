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
        <div className="flex items-center gap-4 flex-shrink-0">
          <Link to="/" className="flex items-center gap-2">
            <img src="/images/logo.jpg" alt="Nav Kalyan Sanstha Logo" className="h-10 w-10 rounded-full" />
            <div className="flex flex-col items-start">
              <span className="text-lg font-semibold text-primary-foreground whitespace-nowrap">Nav Kalyan Sanstha</span>
              <span className="text-xs text-primary-foreground/80 -mt-1 whitespace-nowrap">Charity Organization</span>
            </div>
          </Link>
          <Button asChild variant="ghost" size="sm" className="hidden lg:flex text-primary-foreground hover:text-accent hover:bg-transparent px-2">
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
              className={`text-base font-medium whitespace-nowrap text-primary-foreground hover:text-accent transition-colors relative group ${
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
            <Button variant="outline" size="icon" className="lg:hidden bg-primary-foreground text-primary hover:bg-accent hover:text-accent-foreground">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-card">
            <div className="flex flex-col gap-4 py-6">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <img src="/images/logo.jpg" alt="Nav Kalyan Sanstha Logo" className="h-10 w-10 rounded-full" />
                <div className="flex flex-col items-start">
                  <span className="text-lg font-semibold text-primary">Nav Kalyan Sanstha</span>
                  <span className="text-sm text-primary/80 -mt-1">Charity Organization</span>
                </div>
              </Link>
              <Button asChild variant="ghost" size="sm" className="text-primary hover:text-accent hover:bg-transparent px-2 justify-start">
                <Link to="/donate-food#donation-qr-section" className="flex items-center gap-1">
                  <QrCode className="h-4 w-4" />
                  <span className="text-base">Show QR</span>
                </Link>
              </Button>
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