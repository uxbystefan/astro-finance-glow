
import React from "react";
import BalanceCard from "./BalanceCard";
import SpendingOverview from "./SpendingOverview";
import TransactionList from "./TransactionList";
import AccountCards from "./AccountCards";

const Dashboard = () => {
  return (
    <div className="container py-6 px-4 gap-6 grid grid-cols-1 lg:grid-cols-3 animate-fade-in">
      <div className="lg:col-span-3">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      </div>
      
      <div className="space-y-6">
        <BalanceCard />
        <AccountCards />
      </div>
      
      <div className="space-y-6 lg:col-span-2">
        <SpendingOverview />
        <TransactionList />
      </div>
    </div>
  );
};

export default Dashboard;
