
import React from "react";
import { Card } from "./ui/card";
import { 
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Jan", amount: 2400 },
  { name: "Feb", amount: 1398 },
  { name: "Mar", amount: 3800 },
  { name: "Apr", amount: 2908 },
  { name: "May", amount: 4800 },
  { name: "Jun", amount: 3800 },
  { name: "Jul", amount: 5400 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip p-3 bg-fintech-darker border border-fintech-card-border rounded-lg shadow-lg">
        <p className="text-sm font-medium">{`${label}`}</p>
        <p className="text-sm text-fintech-purple">
          {`$${payload[0].value.toLocaleString()}`}
        </p>
      </div>
    );
  }
  return null;
};

const SpendingOverview = () => {
  return (
    <Card className="fintech-card h-[300px]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">Spending Overview</h3>
        <div className="text-sm text-white/50">Last 7 Months</div>
      </div>
      
      <ResponsiveContainer width="100%" height="85%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 12 }}
          />
          <YAxis 
            hide={true}
          />
          <Tooltip 
            content={<CustomTooltip />}
            cursor={{ fill: "rgba(155, 135, 245, 0.1)" }}
          />
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9b87f5" stopOpacity={1} />
              <stop offset="100%" stopColor="#9b87f5" stopOpacity={0.3} />
            </linearGradient>
          </defs>
          <Bar 
            dataKey="amount" 
            fill="url(#barGradient)" 
            radius={[4, 4, 0, 0]}
            maxBarSize={50}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default SpendingOverview;
