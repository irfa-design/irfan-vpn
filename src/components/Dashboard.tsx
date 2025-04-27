
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Activity, User, Users, Settings, Shield, Clock, DownloadCloud, ArrowUpDown,
  CheckCircle, XCircle, Plus, AlertTriangle, RefreshCw, UserPlus, Power, Monitor
} from 'lucide-react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

// Sample data for the charts
const trafficData = [
  { name: '00:00', download: 10, upload: 5 },
  { name: '03:00', download: 5, upload: 3 },
  { name: '06:00', download: 8, upload: 4 },
  { name: '09:00', download: 30, upload: 15 },
  { name: '12:00', download: 45, upload: 25 },
  { name: '15:00', download: 55, upload: 30 },
  { name: '18:00', download: 65, upload: 40 },
  { name: '21:00', download: 40, upload: 20 },
  { name: '24:00', download: 25, upload: 12 },
];

const bandwidthData = [
  { name: 'Mon', value: 120 },
  { name: 'Tue', value: 150 },
  { name: 'Wed', value: 180 },
  { name: 'Thu', value: 220 },
  { name: 'Fri', value: 300 },
  { name: 'Sat', value: 250 },
  { name: 'Sun', value: 200 },
];

const connectionData = [
  { name: 'Encrypted', value: 85 },
  { name: 'Unencrypted', value: 15 },
];

const users = [
  { id: 1, name: 'User 1', device: 'iPhone 14', status: 'connected', lastActive: '2 mins ago', dataUsage: '1.2 GB' },
  { id: 2, name: 'User 2', device: 'MacBook Pro', status: 'connected', lastActive: '20 mins ago', dataUsage: '0.5 GB' },
  { id: 3, name: 'User 3', device: 'Windows PC', status: 'disconnected', lastActive: '3 hours ago', dataUsage: '0.8 GB' },
  { id: 4, name: 'User 4', device: 'Android Phone', status: 'disconnected', lastActive: '2 days ago', dataUsage: '2.1 GB' },
];

const COLORS = ['#0D9488', '#64748B'];

const Dashboard: React.FC = () => {
  const [serverStatus, setServerStatus] = useState('running');

  return (
    <div className="p-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">VPN Dashboard</h2>
        <p className="text-vpn-gray dark:text-gray-300">Monitor and manage your personal VPN server</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-vpn-gray dark:text-gray-300">Server Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className={`h-3 w-3 rounded-full mr-2 ${serverStatus === 'running' ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}></div>
                <span className="font-semibold">{serverStatus === 'running' ? 'Running' : 'Stopped'}</span>
              </div>
              <Button variant="outline" size="sm" onClick={() => setServerStatus(serverStatus === 'running' ? 'stopped' : 'running')}>
                <Power className="h-4 w-4 mr-1" /> 
                {serverStatus === 'running' ? 'Stop' : 'Start'}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-vpn-gray dark:text-gray-300">Active Connections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <span className="text-3xl font-bold">2</span>
              <Badge variant="outline" className="bg-blue-50 dark:bg-blue-900/20 text-vpn-blue">3 Devices Total</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-vpn-gray dark:text-gray-300">Data Transferred Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <span className="text-3xl font-bold">1.7 GB</span>
              <div className="flex">
                <span className="flex items-center text-xs text-green-600 mr-2">
                  <ArrowUpDown className="h-3 w-3 mr-1" /> 
                  256 kB/s
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-between">
                <span>Traffic Overview</span>
                <div className="flex items-center">
                  <span className="text-xs text-vpn-gray dark:text-gray-300 mr-2">Last 24 hours</span>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <RefreshCw className="h-3 w-3" />
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={trafficData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} tickFormatter={(value) => `${value} MB`} />
                    <Tooltip formatter={(value) => `${value} MB`} />
                    <Area type="monotone" dataKey="download" stroke="#1E3A8A" fill="#93C5FD" strokeWidth={2} />
                    <Area type="monotone" dataKey="upload" stroke="#0D9488" fill="#5EEAD4" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
                <div className="flex justify-center mt-2 text-sm">
                  <div className="flex items-center mr-4">
                    <div className="h-3 w-3 rounded-full bg-blue-400 mr-1"></div>
                    <span>Download</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-teal-400 mr-1"></div>
                    <span>Upload</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Connected Clients</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[280px]">
                <div className="space-y-4">
                  {users.map(user => (
                    <div 
                      key={user.id} 
                      className="flex items-center justify-between p-3 rounded-lg border border-gray-100 dark:border-gray-800"
                    >
                      <div className="flex items-center">
                        <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full mr-3">
                          <User className="h-5 w-5 text-vpn-gray" />
                        </div>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-xs text-vpn-gray">
                            {user.device} • {user.lastActive}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-4 text-right">
                          <div className="text-sm">{user.dataUsage}</div>
                          <div className="flex items-center text-xs">
                            {user.status === 'connected' ? (
                              <>
                                <CheckCircle className="h-3 w-3 text-green-500 mr-1" /> Connected
                              </>
                            ) : (
                              <>
                                <XCircle className="h-3 w-3 text-vpn-gray mr-1" /> Disconnected
                              </>
                            )}
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Monitor className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  <Button className="w-full" variant="outline">
                    <UserPlus className="h-4 w-4 mr-2" /> Add New User
                  </Button>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Server Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="text-sm text-vpn-gray">IP Address</div>
                  <div className="font-medium">198.51.100.123</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-vpn-gray">Location</div>
                  <div className="font-medium">US East</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-vpn-gray">Uptime</div>
                  <div className="font-medium">7d 13h 22m</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-vpn-gray">Protocol</div>
                  <div className="font-medium">WireGuard</div>
                </div>
              </div>

              <div className="pt-2 border-t">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm">Encryption Status</div>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/30">
                    Strong
                  </Badge>
                </div>
                <div className="h-[120px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={connectionData}
                        innerRadius={30}
                        outerRadius={55}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {connectionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex justify-center text-sm">
                    <div className="flex items-center mr-4">
                      <div className="h-3 w-3 rounded-full bg-vpn-teal mr-1"></div>
                      <span>Encrypted (85%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-vpn-gray mr-1"></div>
                      <span>Unencrypted (15%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-vpn-teal" />
                  <Label htmlFor="killswitch">Kill Switch</Label>
                </div>
                <Switch id="killswitch" />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Activity className="h-4 w-4 text-vpn-teal" />
                  <Label htmlFor="analytics">Usage Analytics</Label>
                </div>
                <Switch id="analytics" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-vpn-teal" />
                  <Label htmlFor="autoreconnect">Auto Reconnect</Label>
                </div>
                <Switch id="autoreconnect" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-4 w-4 text-vpn-amber" />
                  <Label htmlFor="adblock">Ad Blocking</Label>
                </div>
                <Switch id="adblock" />
              </div>

              <div className="pt-2">
                <Button variant="outline" className="w-full flex items-center">
                  <DownloadCloud className="mr-2 h-4 w-4" />
                  Download Config Files
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
