
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Lock, Globe, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-vpn-navy/20 dark:to-vpn-teal/10 -z-10" />
      
      {/* Animated dots/grid pattern */}
      <div className="absolute inset-0 opacity-30 -z-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, #1E3A8A 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block mb-4 px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-vpn-teal rounded-full text-sm font-medium animate-fade-in">
            Secure & Self-Hosted
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Irfan VPN<br />Your Private Network
          </h1>
          
          <p className="text-lg text-vpn-gray dark:text-gray-300 mb-8">
            Connect securely to your own private VPN infrastructure. Advanced encryption, 
            zero logging, and complete control over your data.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/setup">
              <Button size="lg" className="bg-vpn-teal hover:bg-vpn-teal/90 text-white">
                Start Your Server
              </Button>
            </Link>
            <Link to="/docs">
              <Button size="lg" variant="outline">
                View Documentation
              </Button>
            </Link>
          </div>
        </div>

        {/* Server Status Display */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white dark:bg-vpn-navy/80 rounded-lg shadow-xl border border-gray-200 dark:border-gray-800 p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center p-4 bg-gray-50 dark:bg-vpn-navy rounded-lg">
                <Server className="h-10 w-10 text-vpn-blue mr-4" />
                <div>
                  <h3 className="font-medium text-vpn-navy dark:text-white">OpenVPN Protocol</h3>
                  <p className="text-sm text-vpn-gray dark:text-gray-300">Industry standard security</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-gray-50 dark:bg-vpn-navy rounded-lg">
                <Shield className="h-10 w-10 text-vpn-teal mr-4" />
                <div>
                  <h3 className="font-medium text-vpn-navy dark:text-white">256-bit Encryption</h3>
                  <p className="text-sm text-vpn-gray dark:text-gray-300">Military-grade protection</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-gray-50 dark:bg-vpn-navy rounded-lg">
                <Globe className="h-10 w-10 text-vpn-amber mr-4" />
                <div>
                  <h3 className="font-medium text-vpn-navy dark:text-white">Global Deployment</h3>
                  <p className="text-sm text-vpn-gray dark:text-gray-300">Choose your location</p>
                </div>
              </div>

              <div className="md:col-span-3 mt-4 p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-100 dark:border-teal-900/30">
                <div className="flex items-center">
                  <Lock className="h-5 w-5 text-vpn-teal mr-2" />
                  <p className="text-sm text-vpn-teal">
                    <span className="font-medium">Secure Connection:</span> Your traffic is fully encrypted using OpenVPN with AES-256-GCM encryption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
