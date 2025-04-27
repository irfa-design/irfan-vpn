
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Globe, Shield, Wifi, Download, Server, Settings } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const VPNConnection = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("us-east");
  const [selectedProtocol, setSelectedProtocol] = useState("openvpn");
  const { toast } = useToast();

  const handleConnect = async () => {
    setIsConnecting(true);
    
    try {
      // Here we would typically make a call to your VPN service's API
      // For a real implementation, this would connect to an actual OpenVPN server
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsConnected(true);
      toast({
        title: "Successfully connected",
        description: `Connected to ${locationLabels[selectedLocation]} using ${protocolLabels[selectedProtocol]}`,
      });
    } catch (error) {
      toast({
        title: "Connection failed",
        description: "Unable to establish VPN connection. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsConnecting(false);
    }
  };

  const handleDisconnect = async () => {
    setIsConnecting(true);
    
    try {
      // Simulate disconnection
      // In a real implementation, this would disconnect from the OpenVPN server
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsConnected(false);
      toast({
        title: "Disconnected",
        description: "VPN connection terminated",
      });
    } catch (error) {
      toast({
        title: "Error disconnecting",
        description: "Failed to disconnect. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsConnecting(false);
    }
  };

  const handleDownloadConfig = () => {
    // In a real implementation, this would generate and download
    // an actual OpenVPN client configuration file
    toast({
      title: "Configuration downloaded",
      description: `${locationLabels[selectedLocation]} OpenVPN configuration file ready for import.`,
    });
  };

  const locationLabels = {
    "us-east": "US East (New York)",
    "us-west": "US West (San Francisco)",
    "eu-central": "Europe (Frankfurt)",
    "asia-east": "Asia (Singapore)"
  };

  const protocolLabels = {
    "openvpn": "OpenVPN (TCP)",
    "openvpn-udp": "OpenVPN (UDP)",
    "wireguard": "WireGuard"
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {isConnected ? (
            <Shield className="h-5 w-5 text-green-500" />
          ) : (
            <Shield className="h-5 w-5 text-gray-400" />
          )}
          Irfan VPN Connection
        </CardTitle>
        <CardDescription>
          Connect securely to our global VPN network
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Tabs defaultValue="connect" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="connect">Connect</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="status">Status</TabsTrigger>
          </TabsList>
          
          <TabsContent value="connect" className="space-y-4 pt-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Server Location</label>
              <Select
                value={selectedLocation}
                onValueChange={setSelectedLocation}
                disabled={isConnected || isConnecting}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us-east">US East (New York)</SelectItem>
                  <SelectItem value="us-west">US West (San Francisco)</SelectItem>
                  <SelectItem value="eu-central">Europe (Frankfurt)</SelectItem>
                  <SelectItem value="asia-east">Asia (Singapore)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Protocol</label>
              <Select
                value={selectedProtocol}
                onValueChange={setSelectedProtocol}
                disabled={isConnected || isConnecting}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select protocol" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="openvpn">OpenVPN (TCP)</SelectItem>
                  <SelectItem value="openvpn-udp">OpenVPN (UDP)</SelectItem>
                  <SelectItem value="wireguard">WireGuard</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              className="w-full bg-vpn-teal hover:bg-vpn-teal/90"
              onClick={isConnected ? handleDisconnect : handleConnect}
              disabled={isConnecting}
            >
              {isConnecting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  {isConnected ? 'Disconnecting...' : 'Connecting...'}
                </div>
              ) : (
                isConnected ? 'Disconnect' : 'Connect to VPN'
              )}
            </Button>
          </TabsContent>
          
          <TabsContent value="settings" className="space-y-4 pt-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Connection Settings</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Auto-connect on startup</span>
                  <input type="checkbox" className="toggle" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Kill switch</span>
                  <input type="checkbox" className="toggle" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">DNS leak protection</span>
                  <input type="checkbox" className="toggle" defaultChecked />
                </div>
              </div>
            </div>
            
            <div className="pt-2">
              <Button 
                variant="outline" 
                className="w-full flex items-center gap-2"
                onClick={handleDownloadConfig}
              >
                <Download className="h-4 w-4" />
                Download OpenVPN Config
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="status" className="space-y-4 pt-4">
            <div className="rounded-lg border p-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Connection Status</span>
                  <span className={`text-sm font-medium ${isConnected ? 'text-green-500' : 'text-gray-500'}`}>
                    {isConnected ? 'Connected' : 'Disconnected'}
                  </span>
                </div>
                
                {isConnected && (
                  <>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Server</span>
                      <span className="text-sm font-medium">{locationLabels[selectedLocation]}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Protocol</span>
                      <span className="text-sm font-medium">{protocolLabels[selectedProtocol]}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">IP Address</span>
                      <span className="text-sm font-mono">198.51.100.123</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Uptime</span>
                      <span className="text-sm">00:12:45</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Data transferred</span>
                      <span className="text-sm">24.5 MB</span>
                    </div>
                  </>
                )}
              </div>
            </div>
            
            <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-4 flex items-center gap-3">
              <div className="bg-vpn-teal/10 p-2 rounded-full">
                <Server className="h-5 w-5 text-vpn-teal" />
              </div>
              <div>
                <p className="text-sm font-medium">System Integration</p>
                <p className="text-xs text-gray-500">
                  {isConnected ? 'VPN is active system-wide' : 'Connect to enable system-wide protection'}
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default VPNConnection;
