import React from 'react';
import { Shield, Server, Globe, Lock, Network, Link, Wifi, Cloud } from 'lucide-react';

const features = [
  {
    icon: <Server className="h-10 w-10 text-vpn-blue" />,
    title: 'OpenVPN Protocol',
    description: 'Industry-standard VPN protocol with proven security and reliability.'
  },
  {
    icon: <Shield className="h-10 w-10 text-vpn-teal" />,
    title: 'AES-256-GCM Encryption',
    description: 'Military-grade encryption for all your network traffic.'
  },
  {
    icon: <Network className="h-10 w-10 text-vpn-amber" />,
    title: 'Kill Switch',
    description: 'Automatic protection if VPN connection drops.'
  },
  {
    icon: <Globe className="h-10 w-10 text-vpn-blue" />,
    title: 'Global Servers',
    description: 'Deploy in multiple regions for optimal performance.'
  },
  {
    icon: <Lock className="h-10 w-10 text-vpn-teal" />,
    title: 'No-Log Policy',
    description: 'Your privacy is guaranteed with zero activity logging.'
  },
  {
    icon: <Link className="h-10 w-10 text-vpn-amber" />,
    title: 'Split Tunneling',
    description: 'Choose which apps use the VPN connection.'
  },
  {
    icon: <Wifi className="h-10 w-10 text-vpn-blue" />,
    title: 'Public WiFi Security',
    description: 'Stay protected on untrusted networks.'
  },
  {
    icon: <Cloud className="h-10 w-10 text-vpn-teal" />,
    title: 'Cloud Integration',
    description: 'Easy deployment to major cloud providers.'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white dark:bg-vpn-navy/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-vpn-navy dark:text-white">
            All the Tools for Your Private Network
          </h2>
          <p className="text-lg text-vpn-gray dark:text-gray-300">
            Our platform provides everything you need to deploy, manage, and secure your own VPN infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-vpn-navy/40 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 transition-all duration-300 hover:shadow-md hover:border-vpn-teal/50"
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-vpn-navy dark:text-white">{feature.title}</h3>
              <p className="text-vpn-gray dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
