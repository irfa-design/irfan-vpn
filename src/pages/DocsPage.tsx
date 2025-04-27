
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2, FileText, Terminal, Laptop, Shield } from 'lucide-react';

const DocsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-32 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-vpn-navy dark:text-white">Documentation</h1>
            <p className="text-lg text-vpn-gray dark:text-gray-300 max-w-2xl mx-auto">
              Learn how to set up, configure, and manage your own VPN server with our comprehensive guides.
            </p>
          </div>

          <Tabs defaultValue="quickstart" className="mb-16">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="quickstart">Quick Start</TabsTrigger>
              <TabsTrigger value="installation">Installation</TabsTrigger>
              <TabsTrigger value="configuration">Configuration</TabsTrigger>
              <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
            </TabsList>
            
            <TabsContent value="quickstart">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Start Guide</CardTitle>
                  <CardDescription>Get your VPN server up and running in minutes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex space-x-4">
                      <div className="bg-vpn-teal/10 p-2 rounded-full h-10 w-10 flex items-center justify-center text-vpn-teal font-semibold">1</div>
                      <div className="flex-1">
                        <h3 className="text-lg font-medium mb-1">Select a Cloud Provider</h3>
                        <p className="text-vpn-gray dark:text-gray-300">
                          Choose from AWS, DigitalOcean, Google Cloud, Azure, or use your own server.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-4">
                      <div className="bg-vpn-teal/10 p-2 rounded-full h-10 w-10 flex items-center justify-center text-vpn-teal font-semibold">2</div>
                      <div className="flex-1">
                        <h3 className="text-lg font-medium mb-1">Configure Your Server</h3>
                        <p className="text-vpn-gray dark:text-gray-300">
                          Choose your server location, size, and specifications based on your needs.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-4">
                      <div className="bg-vpn-teal/10 p-2 rounded-full h-10 w-10 flex items-center justify-center text-vpn-teal font-semibold">3</div>
                      <div className="flex-1">
                        <h3 className="text-lg font-medium mb-1">Deploy and Connect</h3>
                        <p className="text-vpn-gray dark:text-gray-300">
                          Launch your server and download configuration files for your devices.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-4">
                      <div className="bg-vpn-teal/10 p-2 rounded-full h-10 w-10 flex items-center justify-center text-vpn-teal font-semibold">4</div>
                      <div className="flex-1">
                        <h3 className="text-lg font-medium mb-1">Manage Your VPN</h3>
                        <p className="text-vpn-gray dark:text-gray-300">
                          Use the dashboard to add users, monitor usage, and configure advanced settings.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-vpn-navy/20 p-4 rounded-lg border border-gray-100 dark:border-gray-800 flex">
                    <CheckCircle2 className="h-5 w-5 text-vpn-teal mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-sm">
                      Our automated setup wizard will guide you through each step of the process, making it easy even if you don't have technical expertise.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="installation">
              <Card>
                <CardHeader>
                  <CardTitle>Installation Guide</CardTitle>
                  <CardDescription>Detailed steps to install your VPN server</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2 flex items-center">
                        <FileText className="h-5 w-5 mr-2 text-vpn-blue" />
                        Prerequisites
                      </h3>
                      <ul className="list-disc pl-6 space-y-1 text-vpn-gray dark:text-gray-300">
                        <li>Cloud provider account (AWS, DigitalOcean, etc.)</li>
                        <li>SSH client if using manual installation</li>
                        <li>API access tokens for your cloud provider</li>
                      </ul>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2 flex items-center">
                        <Terminal className="h-5 w-5 mr-2 text-vpn-blue" />
                        Command Line Installation
                      </h3>
                      <div className="bg-vpn-navy text-white p-4 rounded-md font-mono text-sm my-3">
                        <p>$ curl -sSL https://example.com/freedom-vpn/install | bash</p>
                      </div>
                      <p className="text-vpn-gray dark:text-gray-300">
                        Run this command on your server to install all required components automatically.
                      </p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2 flex items-center">
                        <Laptop className="h-5 w-5 mr-2 text-vpn-blue" />
                        Client Setup
                      </h3>
                      <p className="text-vpn-gray dark:text-gray-300 mb-3">
                        Download and install the appropriate VPN client for your device:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Card>
                          <CardHeader className="py-3 px-4">
                            <CardTitle className="text-base">Windows</CardTitle>
                          </CardHeader>
                          <CardContent className="py-3 px-4 text-sm">
                            Download WireGuard or OpenVPN client from their official websites.
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader className="py-3 px-4">
                            <CardTitle className="text-base">macOS</CardTitle>
                          </CardHeader>
                          <CardContent className="py-3 px-4 text-sm">
                            Download from App Store or the official websites.
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader className="py-3 px-4">
                            <CardTitle className="text-base">iOS</CardTitle>
                          </CardHeader>
                          <CardContent className="py-3 px-4 text-sm">
                            Download from App Store.
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader className="py-3 px-4">
                            <CardTitle className="text-base">Android</CardTitle>
                          </CardHeader>
                          <CardContent className="py-3 px-4 text-sm">
                            Download from Google Play Store.
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="configuration">
              <Card>
                <CardHeader>
                  <CardTitle>Configuration Guide</CardTitle>
                  <CardDescription>Advanced settings and customization options</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Server Configuration</h3>
                      <p className="text-vpn-gray dark:text-gray-300 mb-3">
                        Edit these settings in your server dashboard or configuration file.
                      </p>
                      <div className="border rounded-lg overflow-hidden">
                        <table className="w-full">
                          <thead className="bg-gray-50 dark:bg-vpn-navy/20">
                            <tr>
                              <th className="py-2 px-4 text-left text-sm font-medium">Setting</th>
                              <th className="py-2 px-4 text-left text-sm font-medium">Default</th>
                              <th className="py-2 px-4 text-left text-sm font-medium">Description</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y">
                            <tr>
                              <td className="py-2 px-4 text-sm font-medium">Port</td>
                              <td className="py-2 px-4 text-sm">51820</td>
                              <td className="py-2 px-4 text-sm text-vpn-gray dark:text-gray-300">UDP port for VPN traffic</td>
                            </tr>
                            <tr>
                              <td className="py-2 px-4 text-sm font-medium">DNS</td>
                              <td className="py-2 px-4 text-sm">1.1.1.1</td>
                              <td className="py-2 px-4 text-sm text-vpn-gray dark:text-gray-300">DNS server for clients</td>
                            </tr>
                            <tr>
                              <td className="py-2 px-4 text-sm font-medium">MTU</td>
                              <td className="py-2 px-4 text-sm">1420</td>
                              <td className="py-2 px-4 text-sm text-vpn-gray dark:text-gray-300">Maximum transmission unit</td>
                            </tr>
                            <tr>
                              <td className="py-2 px-4 text-sm font-medium">Keepalive</td>
                              <td className="py-2 px-4 text-sm">25</td>
                              <td className="py-2 px-4 text-sm text-vpn-gray dark:text-gray-300">Connection persistence interval</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2 flex items-center">
                        <Shield className="h-5 w-5 mr-2 text-vpn-teal" />
                        Security Settings
                      </h3>
                      <p className="text-vpn-gray dark:text-gray-300 mb-3">
                        We recommend these security settings for optimal protection.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-vpn-teal mr-2 mt-0.5" />
                          <div>
                            <p className="font-medium">Enable Kill Switch</p>
                            <p className="text-sm text-vpn-gray dark:text-gray-300">Prevents traffic leaks if the VPN connection drops</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-vpn-teal mr-2 mt-0.5" />
                          <div>
                            <p className="font-medium">Regular Key Rotation</p>
                            <p className="text-sm text-vpn-gray dark:text-gray-300">Automatically rotate encryption keys every 30 days</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-vpn-teal mr-2 mt-0.5" />
                          <div>
                            <p className="font-medium">Enable Two-Factor Authentication</p>
                            <p className="text-sm text-vpn-gray dark:text-gray-300">Add an extra layer of security for the admin dashboard</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-vpn-teal mr-2 mt-0.5" />
                          <div>
                            <p className="font-medium">Block Malicious Sites</p>
                            <p className="text-sm text-vpn-gray dark:text-gray-300">Enable the built-in DNS filter to block malware and phishing sites</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="troubleshooting">
              <Card>
                <CardHeader>
                  <CardTitle>Troubleshooting Guide</CardTitle>
                  <CardDescription>Solutions to common issues</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-6">
                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-gray-50 dark:bg-vpn-navy/20 p-4">
                        <h3 className="font-medium">Connection Issues</h3>
                      </div>
                      <div className="p-4">
                        <p className="mb-3 text-vpn-gray dark:text-gray-300">
                          If you're having trouble connecting to your VPN server:
                        </p>
                        <ol className="list-decimal pl-5 space-y-2 text-vpn-gray dark:text-gray-300">
                          <li>Verify that your server is running (check the dashboard)</li>
                          <li>Check that your firewall allows traffic on the VPN port</li>
                          <li>Confirm that your client configuration matches the server settings</li>
                          <li>Try restarting both the server and your client device</li>
                        </ol>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-gray-50 dark:bg-vpn-navy/20 p-4">
                        <h3 className="font-medium">Performance Problems</h3>
                      </div>
                      <div className="p-4">
                        <p className="mb-3 text-vpn-gray dark:text-gray-300">
                          If your VPN connection is slow:
                        </p>
                        <ol className="list-decimal pl-5 space-y-2 text-vpn-gray dark:text-gray-300">
                          <li>Choose a server location that is geographically closer to you</li>
                          <li>Upgrade to a larger server size if you have multiple users</li>
                          <li>Check if your ISP is throttling VPN connections</li>
                          <li>Try changing the VPN protocol (WireGuard tends to be faster than OpenVPN)</li>
                        </ol>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-gray-50 dark:bg-vpn-navy/20 p-4">
                        <h3 className="font-medium">Common Error Messages</h3>
                      </div>
                      <div className="p-4">
                        <div className="space-y-4">
                          <div>
                            <p className="font-mono bg-red-50 dark:bg-red-900/10 p-2 rounded text-sm text-red-600 dark:text-red-400">
                              ERROR: Unable to connect to server
                            </p>
                            <p className="mt-2 text-vpn-gray dark:text-gray-300">
                              Check your internet connection and verify the server is running.
                            </p>
                          </div>
                          
                          <div>
                            <p className="font-mono bg-red-50 dark:bg-red-900/10 p-2 rounded text-sm text-red-600 dark:text-red-400">
                              ERROR: Authentication failed
                            </p>
                            <p className="mt-2 text-vpn-gray dark:text-gray-300">
                              Verify your credentials and ensure your key files are correct.
                            </p>
                          </div>
                          
                          <div>
                            <p className="font-mono bg-red-50 dark:bg-red-900/10 p-2 rounded text-sm text-red-600 dark:text-red-400">
                              ERROR: Handshake failed
                            </p>
                            <p className="mt-2 text-vpn-gray dark:text-gray-300">
                              There may be a mismatch in your encryption settings or keys.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-gray-50 dark:bg-vpn-navy/20 p-4">
                        <h3 className="font-medium">Getting Support</h3>
                      </div>
                      <div className="p-4">
                        <p className="text-vpn-gray dark:text-gray-300">
                          If you're still experiencing issues, you can get help through these channels:
                        </p>
                        <ul className="mt-3 space-y-2 text-vpn-gray dark:text-gray-300">
                          <li>Community forums: <a href="#" className="text-vpn-blue underline">forums.freedomvpn.com</a></li>
                          <li>GitHub Issues: <a href="#" className="text-vpn-blue underline">github.com/freedom-vpn/issues</a></li>
                          <li>Email support: <span className="text-vpn-blue">support@freedomvpn.com</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DocsPage;
