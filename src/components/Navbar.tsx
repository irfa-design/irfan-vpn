
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm dark:bg-vpn-dark dark:bg-opacity-90">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-vpn-teal" />
          <span className="font-bold text-xl text-vpn-navy dark:text-white">Freedom VPN</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-vpn-navy hover:text-vpn-teal transition-colors dark:text-white">Home</Link>
          <Link to="/features" className="text-vpn-navy hover:text-vpn-teal transition-colors dark:text-white">Features</Link>
          <Link to="/docs" className="text-vpn-navy hover:text-vpn-teal transition-colors dark:text-white">Documentation</Link>
          <Link to="/dashboard">
            <Button variant="default" className="bg-vpn-teal hover:bg-vpn-teal/90">Dashboard</Button>
          </Link>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-vpn-navy dark:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={cn(
        "md:hidden absolute w-full bg-white dark:bg-vpn-navy shadow-md transition-all duration-300 ease-in-out",
        isMenuOpen ? "max-h-60 py-4" : "max-h-0 overflow-hidden"
      )}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <Link 
            to="/" 
            className="text-vpn-navy hover:text-vpn-teal transition-colors dark:text-white px-2 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/features" 
            className="text-vpn-navy hover:text-vpn-teal transition-colors dark:text-white px-2 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </Link>
          <Link 
            to="/docs" 
            className="text-vpn-navy hover:text-vpn-teal transition-colors dark:text-white px-2 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Documentation
          </Link>
          <Link 
            to="/dashboard" 
            className="text-vpn-navy hover:text-vpn-teal transition-colors dark:text-white px-2 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <Button variant="default" className="w-full bg-vpn-teal hover:bg-vpn-teal/90">Dashboard</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
