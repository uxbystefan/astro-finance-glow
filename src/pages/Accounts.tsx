
import React from "react";
import { Plus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Accounts = () => {
  const { toast } = useToast();
  
  const accounts = [
    { name: "Primary Checking", balance: 12489.24, type: "Checking", last4: "4872" },
    { name: "Savings", balance: 35750.12, type: "Savings", last4: "3956" },
    { name: "Emergency Fund", balance: 8000.00, type: "Savings", last4: "9213" }
  ];

  const handleTransfer = (accountName: string) => {
    toast({
      title: "Transfer initiated",
      description: `Starting transfer from ${accountName}`,
    });
  };

  const handleDetails = (accountName: string) => {
    toast({
      title: "Account Details",
      description: `Viewing details for ${accountName}`,
    });
  };

  const handleNewAccount = () => {
    toast({
      title: "New Account",
      description: "Opening new account application form",
    });
  };

  return (
    <div className="container py-6 px-4 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Accounts</h2>
        <Button 
          className="bg-fintech-purple hover:bg-fintech-purple/90"
          onClick={handleNewAccount}
        >
          <Plus size={16} className="mr-2" />
          New Account
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {accounts.map((account, index) => (
          <Card 
            key={index} 
            className="bg-fintech-darker/80 border-fintech-card-border overflow-hidden hover:bg-fintech-darker/60 transition-all duration-300 hover:shadow-lg hover:border-fintech-purple/50 transform hover:-translate-y-1"
          >
            <CardHeader className="pb-2">
              <CardTitle className="flex justify-between items-center">
                <span>{account.name}</span>
                <div className={`w-6 h-6 flex items-center justify-center rounded-full ${index === 0 ? "text-fintech-purple" : "text-fintech-blue"}`}>
                  <span className="text-lg font-bold">{account.type.charAt(0)}</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="text-3xl font-bold mb-1">
                  ${account.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </div>
                <div className="text-sm text-white/60">
                  {account.type} ••{account.last4}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <div className="text-white/70">APY</div>
                  <div>{account.type === "Savings" ? "1.75%" : "0.01%"}</div>
                </div>
                <div>
                  <div className="text-white/70">Available</div>
                  <div>${account.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleTransfer(account.name)}
                className="hover:bg-fintech-purple/10 hover:border-fintech-purple"
              >
                Transfer
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleDetails(account.name)}
                className="hover:bg-fintech-purple/10 hover:border-fintech-purple"
              >
                Details
                <ArrowRight size={14} className="ml-2" />
              </Button>
            </CardFooter>
          </Card>
        ))}

        {/* Add New Account */}
        <Card 
          className="bg-fintech-darker/80 border-fintech-card-border border-dashed flex flex-col items-center justify-center p-8 cursor-pointer hover:bg-fintech-darker/60 transition-all duration-300 hover:shadow-lg hover:border-fintech-purple transform hover:-translate-y-1"
          onClick={handleNewAccount}
        >
          <Plus size={32} className="mb-4 text-fintech-purple" />
          <h3 className="text-lg font-medium mb-2">Add New Account</h3>
          <p className="text-sm text-white/60 text-center">
            Open a new checking or savings account
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Accounts;
