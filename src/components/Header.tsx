
import React, { useState } from 'react';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    // { name: 'Products', href: '/products' },
    
  ];

  const products = [
    { name: 'Auspex mRehab', href: 'https://mrehab.agency/', external: true },
    { name: 'Auspex AudioSight', href: 'https://audiosight.agency/', external: true },
    { name: 'Auspex OralScan', href: 'https://oralscan.health/', external: true },
    { name: 'Auspex SATE', href: 'https://sate.agency/', external: true },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/90 backdrop-blur-xl shadow-lg z-50 border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
            <div className="rounded-lg flex items-center justify-center">
              <img 
                src="/AM_logo.svg" 
                alt="Auspex Medix Logo" 
                className="h-12 w-12 object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-black-500">
                Auspex Medix
              </h1>
              <p className="text-sm text-muted-foreground">AI Foresight. Human Care</p>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-colors duration-200 font-medium ${
                  location.pathname === item.href 
                    ? 'text-blue-500' 
                    : 'text-foreground/70 hover:text-blue-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="text-foreground/70 hover:text-blue-500 font-medium p-0 h-auto bg-transparent hover:bg-transparent"
                >
                  Visit Our Products
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="start" 
                className="w-48 bg-background border border-border shadow-lg rounded-lg"
              >
                {products.map((product) => (
                  <DropdownMenuItem key={product.name} asChild>
                    <a
                      href={product.href}
                      target={product.external ? "_blank" : undefined}
                      rel={product.external ? "noopener noreferrer" : undefined}
                      className="flex items-center justify-between w-full px-3 py-2 text-foreground/70 hover:text-blue-500 hover:bg-muted cursor-pointer"
                    >
                      {product.name}
                      {product.external && <ExternalLink className="h-4 w-4" />}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button className="bg-blue-500 hover:bg-blue-600 text-white border-0" onClick={() => window.location.href = '/contact'}>
              Contact Us
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary/20">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition-colors duration-200 font-medium ${
                    location.pathname === item.href 
                      ? 'text-blue-500' 
                      : 'text-foreground/70 hover:text-blue-500'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="space-y-2">
                <button
                  onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                  className="flex items-center justify-between w-full text-foreground/70 hover:text-blue-500 font-medium transition-colors duration-200"
                >
                  Visit Our Products
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                    isMobileProductsOpen ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {isMobileProductsOpen && (
                  <div className="pl-4 space-y-2 border-l-2 border-border">
                    {products.map((product) => (
                      <a
                        key={product.name}
                        href={product.href}
                        target={product.external ? "_blank" : undefined}
                        rel={product.external ? "noopener noreferrer" : undefined}
                        className="flex items-center justify-between text-foreground/60 hover:text-blue-500 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {product.name}
                        {product.external && <ExternalLink className="h-4 w-4" />}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              <Button 
                className="bg-blue-500 hover:bg-blue-600 text-white w-full mt-4 border-0"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
