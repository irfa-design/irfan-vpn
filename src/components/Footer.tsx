
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-vpn-navy pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-vpn-teal" />
              <span className="font-bold text-xl text-vpn-navy dark:text-white">Freedom VPN</span>
            </div>
            <p className="text-vpn-gray dark:text-gray-300 mb-4">
              Take control of your online privacy with your own personal VPN server.
            </p>
            <div className="flex space-x-4 text-vpn-gray dark:text-gray-300">
              <a href="#" aria-label="Github" className="hover:text-vpn-teal transition-colors">
                <Github size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-vpn-teal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Email" className="hover:text-vpn-teal transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-vpn-navy dark:text-white mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-vpn-gray dark:text-gray-300 hover:text-vpn-teal transition-colors">Features</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-vpn-gray dark:text-gray-300 hover:text-vpn-teal transition-colors">Pricing</Link>
              </li>
              <li>
                <Link to="/docs" className="text-vpn-gray dark:text-gray-300 hover:text-vpn-teal transition-colors">Documentation</Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-vpn-navy dark:text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-vpn-gray dark:text-gray-300 hover:text-vpn-teal transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/guides" className="text-vpn-gray dark:text-gray-300 hover:text-vpn-teal transition-colors">Guides</Link>
              </li>
              <li>
                <Link to="/faq" className="text-vpn-gray dark:text-gray-300 hover:text-vpn-teal transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-vpn-navy dark:text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-vpn-gray dark:text-gray-300 hover:text-vpn-teal transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-vpn-gray dark:text-gray-300 hover:text-vpn-teal transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/cookies" className="text-vpn-gray dark:text-gray-300 hover:text-vpn-teal transition-colors">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-vpn-gray dark:text-gray-400">
          <p>© {new Date().getFullYear()} Freedom VPN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
