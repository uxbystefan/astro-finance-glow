
import React from "react";
import { Card } from "./ui/card";
import { CircleDollarSign, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

const accounts = [
  {
    id: 1,
    name: "Main Account",
    number: "**** 4532",
    balance: 12456.55,
    type: "checking",
    color: "from-fintech-purple/20 to-fintech-blue/10",
    icon: <CircleDollarSign size={18} className="text-fintech-purple" />
  },
  {
    id: 2,
    name: "Savings",
    number: "**** 7814",
    balance: 9820.10,
    type: "savings",
    color: "from-teal-500/20 to-emerald-500/10",
    icon: <CircleDollarSign size={18} className="text-emerald-400" />
  },
  {
    id: 3,
    name: "Credit Card",
    number: "**** 3019",
    balance: 1880.35,
    limit: 5000,
    type: "credit",
    color: "from-amber-500/20 to-orange-500/10",
    icon: <CreditCard size={18} className="text-amber-400" />
  },
];

const AccountCard = ({ account }: { account: typeof accounts[0] }) => {
  return (
    <Card className={cn(
      "p-4 border border-fintech-card-border bg-gradient-to-br",
      account.color
    )}>
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-full bg-white/10">
          {account.icon}
        </div>
        <div>
          <div className="text-sm font-medium">{account.name}</div>
          <div className="text-xs text-white/50">{account.number}</div>
        </div>
      </div>
      
      <div className="mt-2">
        <div className="text-lg font-bold">
          ${account.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
        </div>
        {account.type === "credit" && (
          <div className="text-xs text-white/50">
            Limit: ${account.limit?.toLocaleString('en-US')}
          </div>
        )}
      </div>
    </Card>
  );
};

const AccountCards = () => {
  return (
    <Card className="fintech-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">My Accounts</h3>
        <a href="#" className="text-sm text-fintech-purple">+ Add Account</a>
      </div>
      
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hidden">
        {accounts.map(account => (
          <div key={account.id} className="min-w-[220px] max-w-[280px]">
            <AccountCard account={account} />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default AccountCards;
