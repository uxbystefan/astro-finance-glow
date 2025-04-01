
import React from "react";
import { Card } from "./ui/card";
import { ArrowUpRight, CreditCard, CircleDollarSign } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const BalanceCard = () => {
  return (
    <Card className="p-6 bg-gradient-to-br from-fintech-darker to-fintech-dark border-fintech-card-border animate-fade-in animate-pulse-glow overflow-hidden relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-fintech-purple/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
      
      <div className="flex flex-col">
        <div className="text-sm text-white/70">Total Balance</div>
        <div className="mt-1 text-3xl font-bold">$24,156.00</div>
        
        <div className="flex items-center gap-1 mt-2 text-green-400 text-sm">
          <ArrowUpRight size={16} />
          <span>+2.4%</span>
          <span className="text-white/50 ml-1">this month</span>
        </div>
      </div>
      
      <div className="mt-8 flex gap-3">
        <Button 
          className={cn(
            "flex items-center gap-2 bg-fintech-purple hover:bg-fintech-purple/90"
          )}
        >
          <CircleDollarSign size={18} />
          <span>Send</span>
        </Button>
        
        <Button 
          variant="outline" 
          className="flex items-center gap-2 border-fintech-card-border text-white hover:bg-white/5"
        >
          <CreditCard size={18} />
          <span>Cards</span>
        </Button>
      </div>
    </Card>
  );
};

export default BalanceCard;
