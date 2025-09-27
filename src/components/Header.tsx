import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { MadeWithDyad } from './made-with-dyad'; // Assuming this is the logo

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about-us' },
  { name: 'What We Do', path: '/what-we-do' },
  { name: 'Donate Food', path: '/donate-food' },
  { name: 'Past Donations', path: '/past-donations' },
  { name: 'FAQs', path: '/faqs' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact Us', path: '/contact-us' },
];

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const foundItem = navItems.find(item => item.name.toLowerCase().includes(lowerCaseSearchTerm));
    if (foundItem) {
      navigate(foundItem.path);
    } else if (lowerCaseSearchTerm.includes('privacy')) {
      navigate('/privacy-policy');
    } else if (lowerCaseSearchTerm.includes('terms')) {
      navigate('/terms-and-conditions');
    } else {
      // Optionally show a toast or alert if nothing is found
      console.log('No matching page found for:', searchTerm);
    }
    setSearchTerm('');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/logo.jpg" alt="Nav Kalyan Sanstha Logo" className="h-8 w-8 rounded-full" />
          <span className="text-lg font-semibold text-primary dark:text-primary-foreground">Nav Kalyan Sanstha</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 pr-2 py-1 text-sm rounded-md border border-input bg-background focus:ring-1 focus:ring-ring focus:outline-none"
            />
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </form>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 py-6">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <img src="/images/logo.jpg" alt="Nav Kalyan Sanstha Logo" className="h-8 w-8 rounded-full" />
                <span className="text-lg font-semibold text-primary dark:text-primary-foreground">Nav Kalyan Sanstha</span>
              </Link>
              <form onSubmit={handleSearch} className="relative mb-4">
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 pr-2 py-1 text-sm rounded-md border border-input bg-background focus:ring-1 focus:ring-ring focus:outline-none w-full"
                />
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </form>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-lg font-medium text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-auto">
                <MadeWithDyad />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;