import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Search, QrCode } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command';
import { searchItems } from '@/utils/search-items';

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
  const [openSearch, setOpenSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("Header component rendered or re-rendered.");
  }, []);

  const handleSearchSelect = (itemPath: string, itemAnchor?: string) => {
    setOpenSearch(false);
    setSearchTerm('');
    if (itemAnchor) {
      navigate(`${itemPath}#${itemAnchor}`);
      setTimeout(() => {
        const element = document.getElementById(itemAnchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate(itemPath);
    }
  };

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
          <Button asChild variant="ghost" size="sm" className="text-primary-foreground hover:text-accent hover:bg-transparent px-2">
            <Link to="/donate-food" className="flex items-center gap-1">
              <QrCode className="h-4 w-4" />
              <span className="text-sm">Show QR</span>
            </Link>
          </Button>
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
          <Popover open={openSearch} onOpenChange={setOpenSearch}>
            {/* Corrected PopoverTrigger usage with asChild={true} and shadcn/ui Button */}
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={openSearch}
                className="w-[200px] justify-between bg-background text-foreground hover:bg-background/90 hover:text-foreground"
              >
                <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                {searchTerm ? searchTerm : "Search..."}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-0">
              <Command>
                <CommandInput
                  placeholder="Search pages or sections..."
                  value={searchTerm}
                  onValueChange={setSearchTerm}
                />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup>
                    {searchItems
                      .filter((item) =>
                        item.label.toLowerCase().includes(searchTerm.toLowerCase())
                      )
                      .map((item) => (
                        <CommandItem
                          key={item.value}
                          value={item.label}
                          onSelect={() => handleSearchSelect(item.path, item.anchor)}
                        >
                          {item.label}
                        </CommandItem>
                      ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </nav>
        <Sheet>
          {/* Corrected SheetTrigger usage with asChild={true} and shadcn/ui Button */}
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden bg-primary-foreground text-primary hover:bg-accent hover:text-accent-foreground">
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
              <Button variant="ghost" size="sm" className="text-primary hover:text-accent hover:bg-transparent px-2 justify-start">
                <Link to="/donate-food" className="flex items-center gap-1">
                  <QrCode className="h-4 w-4" />
                  <span className="text-base">Show QR</span>
                </Link>
              </Button>
              <Popover open={openSearch} onOpenChange={setOpenSearch}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openSearch}
                    className="w-full justify-between bg-background text-foreground hover:bg-background/90 hover:text-foreground"
                  >
                    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                    {searchTerm ? searchTerm : "Search..."}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[calc(100%-2rem)] p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search pages or sections..."
                      value={searchTerm}
                      onValueChange={setSearchTerm}
                    />
                    <CommandList>
                      <CommandEmpty>No results found.</CommandEmpty>
                      <CommandGroup>
                        {searchItems
                          .filter((item) =>
                            item.label.toLowerCase().includes(searchTerm.toLowerCase())
                          )
                          .map((item) => (
                            <CommandItem
                              key={item.value}
                              value={item.label}
                              onSelect={() => handleSearchSelect(item.path, item.anchor)}
                            >
                              {item.label}
                            </CommandItem>
                          ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
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