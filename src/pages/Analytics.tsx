
import React from "react";
import { PieChart, BarChart, ArrowUp, ArrowDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart as RechartsBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell
} from "recharts";

const Analytics = () => {
  const monthlyData = [
    { name: 'May', income: 4200, expenses: 3800 },
    { name: 'Jun', income: 4500, expenses: 3600 },
    { name: 'Jul', income: 4800, expenses: 4200 },
    { name: 'Aug', income: 4400, expenses: 4100 },
    { name: 'Sep', income: 5200, expenses: 4300 },
    { name: 'Oct', income: 5600, expenses: 4500 },
  ];
  
  const categoryData = [
    { name: 'Housing', value: 1800, color: '#9b87f5' },
    { name: 'Food', value: 850, color: '#1eaedb' },
    { name: 'Transport', value: 450, color: '#f5a623' },
    { name: 'Utilities', value: 320, color: '#7ed321' },
    { name: 'Shopping', value: 580, color: '#bd10e0' },
    { name: 'Other', value: 500, color: '#50e3c2' },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-fintech-darker p-3 border border-fintech-card-border rounded-md">
          <p className="text-white">{`${payload[0].name} : $${payload[0].value}`}</p>
          {payload[1] && <p className="text-white">{`${payload[1].name} : $${payload[1].value}`}</p>}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="container py-6 px-4 animate-fade-in">
      <h2 className="text-2xl font-bold mb-6">Analytics</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card className="bg-fintech-darker/80 border-fintech-card-border">
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Income vs Expenses</CardTitle>
            <BarChart className="text-fintech-purple" size={20} />
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="name" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="income" fill="#9b87f5" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="expenses" fill="#1eaedb" radius={[4, 4, 0, 0]} />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="p-3 bg-fintech-dark/50 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-white/70">Total Income</span>
                  <ArrowUp className="text-green-400" size={14} />
                </div>
                <div className="text-lg font-bold">$29,700.00</div>
              </div>
              <div className="p-3 bg-fintech-dark/50 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-white/70">Total Expenses</span>
                  <ArrowDown className="text-red-400" size={14} />
                </div>
                <div className="text-lg font-bold">$24,500.00</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-fintech-darker/80 border-fintech-card-border">
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Spending by Category</CardTitle>
            <PieChart className="text-fintech-blue" size={20} />
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={3}
                    dataKey="value"
                    labelLine={false}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="grid grid-cols-3 gap-2 mt-4">
              {categoryData.map((category, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }}></div>
                  <div className="text-xs">
                    <div className="whitespace-nowrap">{category.name}</div>
                    <div className="font-medium">${category.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
