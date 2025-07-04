
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-crunch-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="/lovable-uploads/8d277ac6-0f93-440b-913c-ee7a82a5442c.png" 
                alt="CrvnchMode Logo" 
                className="h-16 md:h-20 w-auto"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#reviews" className="text-crunch-gray hover:text-crunch-blue px-3 py-2 text-sm font-medium transition-colors">
                Reviews
              </a>
              <a href="#about" className="text-crunch-gray hover:text-crunch-blue px-3 py-2 text-sm font-medium transition-colors">
                About
              </a>
              <a href="#blog" className="text-crunch-gray hover:text-crunch-blue px-3 py-2 text-sm font-medium transition-colors">
                Blog
              </a>
              <Button className="bg-crunch-blue hover:bg-blue-600 text-white">
                Find Your Car
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-crunch-gray hover:text-crunch-blue p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#reviews" className="text-crunch-gray hover:text-crunch-blue block px-3 py-2 text-base font-medium">
                Reviews
              </a>
              <a href="#about" className="text-crunch-gray hover:text-crunch-blue block px-3 py-2 text-base font-medium">
                About
              </a>
              <a href="#blog" className="text-crunch-gray hover:text-crunch-blue block px-3 py-2 text-base font-medium">
                Blog
              </a>
              <Button className="bg-crunch-blue hover:bg-blue-600 text-white w-full mt-4">
                Find Your Car
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
