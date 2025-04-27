
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle 
} from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Cloud, Server, Shield, CheckCircle2, ArrowRight, ArrowLeft, 
  Download, Monitor, AlertCircle
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const providers = [
  { id: 'aws', name: 'AWS', logo: <Cloud className="h-6 w-6" /> },
  { id: 'digitalocean', name: 'DigitalOcean', logo: <Cloud className="h-6 w-6" /> },
  { id: 'gcp', name: 'Google Cloud', logo: <Cloud className="h-6 w-6" /> },
  { id: 'azure', name: 'Microsoft Azure', logo: <Cloud className="h-6 w-6" /> },
  { id: 'selfhosted', name: 'Self-hosted', logo: <Server className="h-6 w-6" /> }
];

type StepProps = {
  onNext: () => void;
  onBack?: () => void;
  isLast?: boolean;
}

const ProviderStep: React.FC<StepProps> = ({ onNext, isLast }) => {
  const [provider, setProvider] = useState<string | null>(null);
  
  return (
    <>
      <CardHeader>
        <CardTitle>Choose Cloud Provider</CardTitle>
        <CardDescription>
          Select where you want to deploy your VPN server
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup value={provider || ""} onValueChange={setProvider} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {providers.map((p) => (
            <div key={p.id}>
              <RadioGroupItem 
                value={p.id} 
                id={p.id} 
                className="peer sr-only"
              />
              <Label
                htmlFor={p.id}
                className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:border-vpn-teal peer-data-[state=checked]:border-vpn-teal peer-data-[state=checked]:bg-vpn-teal/5"
              >
                <div className="flex items-center gap-3">
                  {p.logo}
                  <span>{p.name}</span>
                </div>
                <CheckCircle2 className="h-5 w-5 text-vpn-teal opacity-0 peer-data-[state=checked]:opacity-100" />
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div></div>
        <Button 
          onClick={onNext} 
          disabled={!provider} 
          className="bg-vpn-teal hover:bg-vpn-teal/90"
        >
          Next <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </>
  );
};

const ConfigurationStep: React.FC<StepProps> = ({ onNext, onBack }) => {
  const [region, setRegion] = useState('us-east-1');
  const [serverSize, setServerSize] = useState('small');

  return (
    <>
      <CardHeader>
        <CardTitle>Configure Your Server</CardTitle>
        <CardDescription>
          Choose the specifications for your VPN server
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="region">Region</Label>
          <select 
            id="region" 
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-vpn-teal"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
            <option value="us-east-1">US East (N. Virginia)</option>
            <option value="us-west-1">US West (N. California)</option>
            <option value="eu-central-1">EU (Frankfurt)</option>
            <option value="ap-northeast-1">Asia Pacific (Tokyo)</option>
          </select>
          <p className="text-sm text-vpn-gray">Choose a region close to your physical location for better performance</p>
        </div>

        <div className="space-y-2">
          <Label>Server Size</Label>
          <Tabs defaultValue="small" onValueChange={setServerSize} className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="small" className="flex-1">Small</TabsTrigger>
              <TabsTrigger value="medium" className="flex-1">Medium</TabsTrigger>
              <TabsTrigger value="large" className="flex-1">Large</TabsTrigger>
            </TabsList>
            <TabsContent value="small" className="p-4 border rounded-md mt-2">
              <h4 className="font-medium">1 CPU, 1GB RAM</h4>
              <p className="text-sm text-vpn-gray">Ideal for personal use, 1-2 users</p>
            </TabsContent>
            <TabsContent value="medium" className="p-4 border rounded-md mt-2">
              <h4 className="font-medium">2 CPU, 2GB RAM</h4>
              <p className="text-sm text-vpn-gray">Good for families, 3-5 users</p>
            </TabsContent>
            <TabsContent value="large" className="p-4 border rounded-md mt-2">
              <h4 className="font-medium">4 CPU, 4GB RAM</h4>
              <p className="text-sm text-vpn-gray">Best for teams, 5+ users</p>
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <Button 
          onClick={onNext} 
          className="bg-vpn-teal hover:bg-vpn-teal/90"
        >
          Next <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </>
  );
};

const UserSetupStep: React.FC<StepProps> = ({ onNext, onBack }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <CardHeader>
        <CardTitle>Create Admin User</CardTitle>
        <CardDescription>
          Set up your admin account to manage your VPN
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input 
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="admin"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input 
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
        </div>
        <div className="rounded-md bg-amber-50 dark:bg-amber-900/20 p-4 border border-amber-100 dark:border-amber-900/30">
          <div className="flex">
            <AlertCircle className="h-5 w-5 text-amber-500 mr-2" />
            <div className="text-sm text-amber-800 dark:text-amber-300">
              Make sure to use a strong password and keep it secure. This will be used to access your VPN administration portal.
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <Button 
          onClick={onNext} 
          className="bg-vpn-teal hover:bg-vpn-teal/90"
          disabled={!username || password.length < 8}
        >
          Next <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </>
  );
};

const DeploymentStep: React.FC<StepProps> = ({ onNext, onBack }) => {
  const { toast } = useToast();
  const [isDeploying, setIsDeploying] = useState(false);
  
  const handleDeploy = () => {
    setIsDeploying(true);
    
    // Simulate deployment process
    setTimeout(() => {
      setIsDeploying(false);
      toast({
        title: "Deployment successful!",
        description: "Your VPN server has been deployed successfully.",
      });
      onNext();
    }, 3000);
  };
  
  return (
    <>
      <CardHeader>
        <CardTitle>Review & Deploy</CardTitle>
        <CardDescription>
          Confirm your settings and deploy your VPN server
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="border rounded-lg p-4 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-vpn-gray">Cloud Provider:</span>
              <span className="font-medium">AWS</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-vpn-gray">Region:</span>
              <span className="font-medium">US East (N. Virginia)</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-vpn-gray">Server Size:</span>
              <span className="font-medium">Small (1 CPU, 1GB RAM)</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-vpn-gray">Estimated Cost:</span>
              <span className="font-medium">~$5/month</span>
            </div>
          </div>
          
          <div className="rounded-md bg-blue-50 dark:bg-blue-900/20 p-4 border border-blue-100 dark:border-blue-900/30">
            <div className="flex">
              <Shield className="h-5 w-5 text-vpn-blue mr-2 flex-shrink-0" />
              <div className="text-sm text-blue-800 dark:text-blue-300">
                Your server will be deployed with the latest security patches and configured with best-practice security settings.
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onBack} disabled={isDeploying}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <Button 
          onClick={handleDeploy} 
          className="bg-vpn-teal hover:bg-vpn-teal/90"
          disabled={isDeploying}
        >
          {isDeploying ? (
            <>
              <span className="animate-pulse">Deploying...</span>
            </>
          ) : (
            <>
              Deploy Server <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </CardFooter>
    </>
  );
};

const SuccessStep: React.FC<StepProps> = ({ onNext, onBack }) => {
  const ipAddress = "198.51.100.123";
  
  return (
    <>
      <CardHeader>
        <div className="flex justify-center mb-2">
          <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
            <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-400" />
          </div>
        </div>
        <CardTitle className="text-center">Deployment Successful!</CardTitle>
        <CardDescription className="text-center">
          Your VPN server is now ready to use
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <div className="text-sm text-vpn-gray mb-1">Server IP Address:</div>
          <div className="text-xl font-mono font-medium bg-gray-100 dark:bg-vpn-navy/60 py-2 px-4 rounded-md">
            {ipAddress}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button variant="outline" className="flex items-center justify-center">
            <Download className="mr-2 h-4 w-4" />
            Download Config
          </Button>
          <Button variant="outline" className="flex items-center justify-center">
            <Monitor className="mr-2 h-4 w-4" />
            Admin Dashboard
          </Button>
        </div>
        
        <div className="rounded-md bg-vpn-teal/10 p-4 border border-vpn-teal/20">
          <div className="text-sm text-vpn-teal">
            <p className="font-medium mb-2">Next Steps:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Download the VPN configuration file</li>
              <li>Import the configuration into your VPN client</li>
              <li>Connect to your new secure VPN</li>
            </ol>
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button 
          variant="link" 
          onClick={onBack} 
          className="text-vpn-teal"
        >
          Start again with different settings
        </Button>
      </CardFooter>
    </>
  );
};

const SetupWizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };
  
  const handleBack = () => {
    setCurrentStep(Math.max(0, currentStep - 1));
  };
  
  const handleReset = () => {
    setCurrentStep(0);
  };
  
  const steps = [
    <ProviderStep key="provider" onNext={handleNext} />,
    <ConfigurationStep key="config" onNext={handleNext} onBack={handleBack} />,
    <UserSetupStep key="user" onNext={handleNext} onBack={handleBack} />,
    <DeploymentStep key="deploy" onNext={handleNext} onBack={handleBack} />,
    <SuccessStep key="success" onNext={handleNext} onBack={handleReset} />
  ];
  
  return (
    <div className="max-w-md mx-auto">
      <Card className="border-2">
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 flex justify-between px-6 py-2">
            {[0, 1, 2, 3, 4].map((step) => (
              <div 
                key={step} 
                className={`h-2 w-2 rounded-full ${
                  step <= currentStep 
                    ? 'bg-vpn-teal animate-pulse-slow' 
                    : 'bg-gray-200 dark:bg-gray-700'
                }`}
              />
            ))}
          </div>
        </div>
        {steps[currentStep]}
      </Card>
    </div>
  );
};

export default SetupWizard;
