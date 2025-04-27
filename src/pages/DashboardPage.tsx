
import React from 'react';
import Navbar from '@/components/Navbar';
import Dashboard from '@/components/Dashboard';
import VPNConnection from '@/components/VPNConnection';

const DashboardPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-vpn-navy/10">
      <Navbar />
      <main className="flex-grow pt-24 container mx-auto">
        <div className="mb-8">
          <VPNConnection />
        </div>
        <Dashboard />
      </main>
    </div>
  );
};

export default DashboardPage;
