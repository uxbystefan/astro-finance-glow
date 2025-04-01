
import React from "react";
import { TrendingUp, TrendingDown, Clock, Plus, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Investments = () => {
  const portfolios = [
    {
      name: "Growth Portfolio",
      value: 32450.78,
      change: 5.4,
      positive: true,
      assets: [
        { name: "AAPL", allocation: 25 },
        { name: "MSFT", allocation: 20 },
        { name: "AMZN", allocation: 15 },
        { name: "TSLA", allocation: 10 },
        { name: "GOOGL", allocation: 15 },
        { name: "Other", allocation: 15 },
      ]
    },
    {
      name: "Retirement Fund",
      value: 128750.45,
      change: -0.8,
      positive: false,
      assets: [
        { name: "Bonds", allocation: 40 },
        { name: "SPY", allocation: 30 },
        { name: "DIA", allocation: 15 },
        { name: "Real Estate", allocation: 10 },
        { name: "Other", allocation: 5 },
      ]
    }
  ];

  const stocks = [
    { symbol: "AAPL", name: "Apple Inc.", price: 178.42, change: 3.21, positive: true },
    { symbol: "MSFT", name: "Microsoft Corp.", price: 325.97, change: 1.58, positive: true },
    { symbol: "AMZN", name: "Amazon.com Inc.", price: 138.23, change: -0.74, positive: false },
    { symbol: "TSLA", name: "Tesla Inc.", price: 241.92, change: 5.42, positive: true },
    { symbol: "GOOGL", name: "Alphabet Inc.", price: 137.88, change: -0.63, positive: false },
  ];

  return (
    <div className="container py-6 px-4 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Investments</h2>
        <Button className="bg-fintech-purple hover:bg-fintech-purple/90">
          <Plus size={16} className="mr-2" />
          New Investment
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-fintech-darker/80 border-fintech-card-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Your Portfolios</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {portfolios.map((portfolio, index) => (
                  <div key={index} className="bg-fintech-dark/50 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-medium text-lg">{portfolio.name}</h3>
                        <div className="text-sm text-white/60">Portfolio Value</div>
                        <div className="text-xl font-bold mt-1">
                          ${portfolio.value.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                        </div>
                      </div>
                      <div className="flex items-center">
                        {portfolio.positive ? (
                          <TrendingUp className="text-green-400 mr-2" size={18} />
                        ) : (
                          <TrendingDown className="text-red-400 mr-2" size={18} />
                        )}
                        <span className={portfolio.positive ? "text-green-400" : "text-red-400"}>
                          {portfolio.positive ? "+" : ""}{portfolio.change}%
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mb-2">
                      {portfolio.assets.map((asset, i) => (
                        <div 
                          key={i} 
                          className="text-xs px-2 py-1 rounded-full bg-fintech-card-border"
                          title={`${asset.name}: ${asset.allocation}%`}
                        >
                          {asset.name}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-end">
                      <Button variant="ghost" size="sm" className="text-fintech-purple">
                        View Details <ArrowRight size={14} className="ml-1" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-fintech-darker/80 border-fintech-card-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Watchlist</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-fintech-card-border text-white/70">
                      <th className="text-left py-3 px-4">Symbol</th>
                      <th className="text-left py-3 px-4">Name</th>
                      <th className="text-right py-3 px-4">Price</th>
                      <th className="text-right py-3 px-4">24h Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stocks.map((stock, index) => (
                      <tr key={index} className="border-b border-fintech-card-border hover:bg-fintech-dark/30 cursor-pointer">
                        <td className="py-3 px-4 font-medium">{stock.symbol}</td>
                        <td className="py-3 px-4 text-white/80">{stock.name}</td>
                        <td className="py-3 px-4 text-right">${stock.price}</td>
                        <td className={`py-3 px-4 text-right ${stock.positive ? "text-green-400" : "text-red-400"}`}>
                          {stock.positive ? "+" : ""}{stock.change}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-fintech-darker/80 border-fintech-card-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Market Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>S&P 500</span>
                  <div className="flex items-center text-green-400">
                    <TrendingUp size={16} className="mr-1" />
                    <span>+1.24%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Nasdaq</span>
                  <div className="flex items-center text-green-400">
                    <TrendingUp size={16} className="mr-1" />
                    <span>+1.82%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Dow Jones</span>
                  <div className="flex items-center text-green-400">
                    <TrendingUp size={16} className="mr-1" />
                    <span>+0.92%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Bitcoin</span>
                  <div className="flex items-center text-red-400">
                    <TrendingDown size={16} className="mr-1" />
                    <span>-2.56%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-fintech-darker/80 border-fintech-card-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Clock size={16} className="mr-2 text-fintech-purple" />
                Recent Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <div className="border-l-2 border-green-400 pl-3 py-1">
                  <div className="font-medium">Bought AAPL</div>
                  <div className="text-white/60">10 shares at $178.42</div>
                  <div className="text-white/60">Today, 11:24 AM</div>
                </div>
                <div className="border-l-2 border-red-400 pl-3 py-1">
                  <div className="font-medium">Sold MSFT</div>
                  <div className="text-white/60">5 shares at $325.97</div>
                  <div className="text-white/60">Yesterday, 3:15 PM</div>
                </div>
                <div className="border-l-2 border-blue-400 pl-3 py-1">
                  <div className="font-medium">Dividend Received</div>
                  <div className="text-white/60">$125.48 from VTI</div>
                  <div className="text-white/60">Oct 10, 9:00 AM</div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full">
                View All Activities
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Investments;
