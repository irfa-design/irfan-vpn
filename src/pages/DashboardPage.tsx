
import React from 'react';
import Navbar from '@/components/Navbar';
import Dashboard from '@/components/Dashboard';

const DashboardPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-vpn-navy/10">
      <Navbar />
      <main className="flex-grow pt-24 container mx-auto">
        <Dashboard />
      </main>
    </div>
  );
};

export default DashboardPage;
