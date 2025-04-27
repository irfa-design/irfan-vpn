
import React from 'react';
import { Shield, Server, Globe, Lock, UserPlus, Zap, Layers, Settings } from 'lucide-react';

const features = [
  {
    icon: <Server className="h-10 w-10 text-vpn-blue" />,
    title: 'One-Click Deployment',
    description: 'Deploy your VPN server to AWS, DigitalOcean, Google Cloud or Azure with just a few clicks.'
  },
  {
    icon: <Shield className="h-10 w-10 text-vpn-teal" />,
    title: 'Military-Grade Encryption',
    description: 'Your data is secured with AES-256 encryption, the same standard used by governments and security experts.'
  },
  {
    icon: <UserPlus className="h-10 w-10 text-vpn-amber" />,
    title: 'Multiple Users',
    description: 'Create and manage user accounts for family members or team members easily.'
  },
  {
    icon: <Globe className="h-10 w-10 text-vpn-blue" />,
    title: 'Global Locations',
    description: 'Deploy your VPN server in any region worldwide to access geo-restricted content.'
  },
  {
    icon: <Lock className="h-10 w-10 text-vpn-teal" />,
    title: 'No-Logging Policy',
    description: 'Your activities are never tracked or logged, ensuring complete privacy.'
  },
  {
    icon: <Zap className="h-10 w-10 text-vpn-amber" />,
    title: 'High Performance',
    description: 'Experience fast connection speeds with optimized server configurations.'
  },
  {
    icon: <Layers className="h-10 w-10 text-vpn-blue" />,
    title: 'Open Source',
    description: 'Built on trusted open-source VPN protocols and infrastructure that you can verify.'
  },
  {
    icon: <Settings className="h-10 w-10 text-vpn-teal" />,
    title: 'Easy Management',
    description: 'Intuitive dashboard to monitor and manage your VPN server with real-time statistics.'
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
