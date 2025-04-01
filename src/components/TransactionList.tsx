
import React from "react";
import { Card } from "./ui/card";
import { ArrowDownLeft, ArrowUpRight, ShoppingBag, Coffee, Car, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

const transactions = [
  {
    id: 1,
    title: "Amazon",
    category: "Shopping",
    amount: -85.32,
    date: "Today",
    icon: <ShoppingBag size={16} />,
  },
  {
    id: 2,
    title: "Starbucks",
    category: "Food & Drinks",
    amount: -4.99,
    date: "Today",
    icon: <Coffee size={16} />,
  },
  {
    id: 3,
    title: "Deposit",
    category: "Income",
    amount: 1200.00,
    date: "Yesterday",
    icon: <ArrowDownLeft size={16} />,
  },
  {
    id: 4,
    title: "Uber",
    category: "Transport",
    amount: -22.50,
    date: "Yesterday",
    icon: <Car size={16} />,
  },
  {
    id: 5,
    title: "Netflix",
    category: "Subscription",
    amount: -13.99,
    date: "Jun 12",
    icon: <CreditCard size={16} />,
  },
];

const TransactionItem = ({ transaction }: { transaction: typeof transactions[0] }) => {
  const isIncome = transaction.amount > 0;
  
  return (
    <div className="flex items-center justify-between py-3 border-b border-fintech-card-border last:border-0">
      <div className="flex items-center gap-3">
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center",
          isIncome ? "bg-green-500/10" : "bg-fintech-purple/10"
        )}>
          {transaction.icon}
        </div>
        
        <div>
          <div className="font-medium">{transaction.title}</div>
          <div className="text-xs text-white/50">{transaction.category}</div>
        </div>
      </div>
      
      <div className="text-right">
        <div className={cn(
          "font-medium",
          isIncome ? "text-green-400" : "text-white"
        )}>
          {isIncome ? "+" : ""}{transaction.amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </div>
        <div className="text-xs text-white/50">{transaction.date}</div>
      </div>
    </div>
  );
};

const TransactionList = () => {
  return (
    <Card className="fintech-card overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">Recent Transactions</h3>
        <a href="#" className="text-sm text-fintech-purple">View All</a>
      </div>
      
      <div className="divide-y divide-fintech-card-border">
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </Card>
  );
};

export default TransactionList;
