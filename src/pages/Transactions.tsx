
import React from "react";
import { Search, Filter, ArrowUpRight, ArrowDownLeft, Coffee, ShoppingBag, Smartphone, Home, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Transactions = () => {
  const transactions = [
    { id: 1, name: "Starbucks", category: "Food & Drinks", amount: -12.95, date: "Today, 10:30 AM", icon: <Coffee size={18} />, color: "bg-orange-500" },
    { id: 2, name: "Amazon", category: "Shopping", amount: -134.27, date: "Yesterday, 2:15 PM", icon: <ShoppingBag size={18} />, color: "bg-blue-500" },
    { id: 3, name: "Income Deposit", category: "Deposit", amount: 2750.00, date: "Sep 28, 9:00 AM", icon: <ArrowDownLeft size={18} />, color: "bg-green-500" },
    { id: 4, name: "T-Mobile", category: "Utilities", amount: -85.00, date: "Sep 25, 4:32 PM", icon: <Smartphone size={18} />, color: "bg-pink-500" },
    { id: 5, name: "Rent Payment", category: "Housing", amount: -1800.00, date: "Sep 23, 10:00 AM", icon: <Home size={18} />, color: "bg-violet-500" },
    { id: 6, name: "Transfer to Savings", category: "Transfer", amount: -500.00, date: "Sep 20, 5:45 PM", icon: <ArrowUpRight size={18} />, color: "bg-yellow-500" },
    { id: 7, name: "Electric Bill", category: "Utilities", amount: -92.55, date: "Sep 18, 9:15 AM", icon: <Zap size={18} />, color: "bg-indigo-500" },
  ];

  return (
    <div className="container py-6 px-4 animate-fade-in">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-6">Transactions</h2>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={18} />
            <input 
              type="text" 
              placeholder="Search transactions..." 
              className="w-full bg-fintech-darker/80 border border-fintech-card-border rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-fintech-purple"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter size={16} />
            Filter
          </Button>
        </div>
      </div>

      <Card className="bg-fintech-darker/80 border-fintech-card-border">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between py-2 border-b border-fintech-card-border last:border-0">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full ${transaction.color} flex items-center justify-center`}>
                    {transaction.icon}
                  </div>
                  <div>
                    <div className="font-medium">{transaction.name}</div>
                    <div className="text-sm text-white/60">{transaction.category}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={transaction.amount > 0 ? "text-green-400" : "text-white"}>
                    {transaction.amount > 0 ? "+" : ""}{transaction.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                  </div>
                  <div className="text-sm text-white/60">{transaction.date}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Transactions;
