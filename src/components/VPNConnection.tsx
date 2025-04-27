
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Globe, Shield, Wifi } from 'lucide-react';

const VPNConnection = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const { toast } = useToast();

  const handleConnect = async () => {
    setIsConnecting(true);
    
    try {
      // Here we would typically make a call to your VPN service's API
      // For now, we'll simulate the connection process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsConnected(true);
      toast({
        title: "Successfully connected",
        description: "Your VPN connection is now secure",
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

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {isConnected ? (
            <Shield className="h-5 w-5 text-green-500" />
          ) : (
            <Shield className="h-5 w-5 text-gray-400" />
          )}
          VPN Connection Status
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="flex items-center gap-3">
            <Globe className="h-5 w-5 text-vpn-teal" />
            <div>
              <p className="font-medium">Server Location</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">US East</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Wifi className={`h-5 w-5 ${isConnected ? 'text-green-500' : 'text-gray-400'}`} />
            <span className={`text-sm ${isConnected ? 'text-green-500' : 'text-gray-400'}`}>
              {isConnected ? 'Connected' : 'Disconnected'}
            </span>
          </div>
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
      </CardContent>
    </Card>
  );
};

export default VPNConnection;
