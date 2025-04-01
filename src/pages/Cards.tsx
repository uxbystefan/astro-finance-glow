
import React from "react";
import { CreditCard, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Cards = () => {
  return (
    <div className="container py-6 px-4 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Cards</h2>
        <Button className="bg-fintech-purple hover:bg-fintech-purple/90">
          <Plus size={16} className="mr-2" />
          New Card
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Virtual Card */}
        <Card className="bg-fintech-darker/80 border-fintech-card-border overflow-hidden card-glow">
          <CardHeader className="pb-2">
            <CardTitle className="flex justify-between items-center">
              <span>Virtual Card</span>
              <CreditCard className="text-fintech-purple" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-r from-fintech-purple to-fintech-blue p-4 rounded-xl mb-4">
              <div className="text-xs opacity-70 mb-4">CARD NUMBER</div>
              <div className="text-lg font-mono mb-6">•••• •••• •••• 4289</div>
              <div className="flex justify-between">
                <div>
                  <div className="text-xs opacity-70">VALID THRU</div>
                  <div>12/25</div>
                </div>
                <div>
                  <div className="text-xs opacity-70">CVV</div>
                  <div>•••</div>
                </div>
              </div>
            </div>
            <div className="flex justify-between text-sm">
              <div className="text-white/70">Status</div>
              <div className="text-green-400">Active</div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm">Freeze</Button>
            <Button variant="outline" size="sm">Details</Button>
          </CardFooter>
        </Card>

        {/* Physical Card */}
        <Card className="bg-fintech-darker/80 border-fintech-card-border overflow-hidden card-glow">
          <CardHeader className="pb-2">
            <CardTitle className="flex justify-between items-center">
              <span>Physical Card</span>
              <CreditCard className="text-fintech-blue" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-r from-fintech-blue to-fintech-purple p-4 rounded-xl mb-4">
              <div className="text-xs opacity-70 mb-4">CARD NUMBER</div>
              <div className="text-lg font-mono mb-6">•••• •••• •••• 7821</div>
              <div className="flex justify-between">
                <div>
                  <div className="text-xs opacity-70">VALID THRU</div>
                  <div>09/26</div>
                </div>
                <div>
                  <div className="text-xs opacity-70">CVV</div>
                  <div>•••</div>
                </div>
              </div>
            </div>
            <div className="flex justify-between text-sm">
              <div className="text-white/70">Status</div>
              <div className="text-green-400">Active</div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm">Freeze</Button>
            <Button variant="outline" size="sm">Details</Button>
          </CardFooter>
        </Card>

        {/* Add New Card */}
        <Card className="bg-fintech-darker/80 border-fintech-card-border border-dashed flex flex-col items-center justify-center p-8 cursor-pointer hover:bg-fintech-darker/60 transition-colors">
          <Plus size={32} className="mb-4 text-fintech-purple" />
          <h3 className="text-lg font-medium mb-2">Add New Card</h3>
          <p className="text-sm text-white/60 text-center">
            Request a new virtual or physical card
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Cards;
