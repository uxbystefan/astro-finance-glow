
import React from "react";
import { User, Bell, Shield, CreditCard, HelpCircle, Moon, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  return (
    <div className="container py-6 px-4 animate-fade-in">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card className="bg-fintech-darker/80 border-fintech-card-border sticky top-20">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Settings Menu</CardTitle>
            </CardHeader>
            <CardContent>
              <nav className="space-y-1">
                <a href="#profile" className="flex items-center gap-3 p-3 rounded-lg bg-fintech-purple/10 text-white">
                  <User size={18} />
                  <span>Profile</span>
                </a>
                <a href="#notifications" className="flex items-center gap-3 p-3 rounded-lg hover:bg-fintech-purple/10 text-white/80 hover:text-white transition-all">
                  <Bell size={18} />
                  <span>Notifications</span>
                </a>
                <a href="#security" className="flex items-center gap-3 p-3 rounded-lg hover:bg-fintech-purple/10 text-white/80 hover:text-white transition-all">
                  <Shield size={18} />
                  <span>Security</span>
                </a>
                <a href="#payment" className="flex items-center gap-3 p-3 rounded-lg hover:bg-fintech-purple/10 text-white/80 hover:text-white transition-all">
                  <CreditCard size={18} />
                  <span>Payment Methods</span>
                </a>
                <a href="#appearance" className="flex items-center gap-3 p-3 rounded-lg hover:bg-fintech-purple/10 text-white/80 hover:text-white transition-all">
                  <Moon size={18} />
                  <span>Appearance</span>
                </a>
                <a href="#help" className="flex items-center gap-3 p-3 rounded-lg hover:bg-fintech-purple/10 text-white/80 hover:text-white transition-all">
                  <HelpCircle size={18} />
                  <span>Help & Support</span>
                </a>
              </nav>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-2 space-y-6">
          <Card id="profile" className="bg-fintech-darker/80 border-fintech-card-border">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <User size={18} />
                Profile Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-fintech-purple to-fintech-blue flex items-center justify-center text-2xl font-bold mb-2">
                    JD
                  </div>
                  <Button variant="outline" size="sm">
                    Change Picture
                  </Button>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-white/70 mb-1 block">First Name</label>
                      <input 
                        type="text" 
                        value="John" 
                        className="w-full bg-fintech-dark/50 border border-fintech-card-border rounded-lg py-2 px-3 focus:outline-none focus:ring-1 focus:ring-fintech-purple"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-white/70 mb-1 block">Last Name</label>
                      <input 
                        type="text" 
                        value="Doe" 
                        className="w-full bg-fintech-dark/50 border border-fintech-card-border rounded-lg py-2 px-3 focus:outline-none focus:ring-1 focus:ring-fintech-purple"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm text-white/70 mb-1 block">Email Address</label>
                    <div className="flex gap-2">
                      <input 
                        type="email" 
                        value="john.doe@example.com" 
                        className="flex-1 bg-fintech-dark/50 border border-fintech-card-border rounded-lg py-2 px-3 focus:outline-none focus:ring-1 focus:ring-fintech-purple"
                      />
                      <Button variant="outline" size="sm" className="whitespace-nowrap">
                        <Mail size={14} className="mr-1" />
                        Verify
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm text-white/70 mb-1 block">Phone Number</label>
                    <input 
                      type="tel" 
                      value="+1 (555) 123-4567" 
                      className="w-full bg-fintech-dark/50 border border-fintech-card-border rounded-lg py-2 px-3 focus:outline-none focus:ring-1 focus:ring-fintech-purple"
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button className="bg-fintech-purple hover:bg-fintech-purple/90">
                      Save Changes
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card id="notifications" className="bg-fintech-darker/80 border-fintech-card-border">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Bell size={18} />
                Notification Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Transaction Alerts</h3>
                    <p className="text-sm text-white/60">Get notified about all transactions in your account</p>
                  </div>
                  <Switch checked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Security Alerts</h3>
                    <p className="text-sm text-white/60">Get notified about security related activities</p>
                  </div>
                  <Switch checked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Price Alerts</h3>
                    <p className="text-sm text-white/60">Get notified about changes in your investments</p>
                  </div>
                  <Switch checked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Marketing Emails</h3>
                    <p className="text-sm text-white/60">Receive marketing promotions and newsletters</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
