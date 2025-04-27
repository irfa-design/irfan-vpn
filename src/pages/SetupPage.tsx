
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SetupWizard from '@/components/SetupWizard';

const SetupPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-32 px-4 bg-gray-50 dark:bg-vpn-navy/10">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h1 className="text-3xl font-bold mb-4 text-vpn-navy dark:text-white">Set Up Your VPN Server</h1>
            <p className="text-lg text-vpn-gray dark:text-gray-300">
              Follow the steps below to deploy your own secure VPN server in minutes.
            </p>
          </div>
          <SetupWizard />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SetupPage;
