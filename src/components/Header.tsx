
import React from "react";
import { Bell, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  return (
    <header className="p-4 flex items-center justify-between bg-fintech-darker/50 backdrop-blur-md border-b border-fintech-card-border sticky top-0 z-10">
      <div className="flex items-center gap-3">
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-white" 
          onClick={toggleSidebar}
        >
          <Menu size={22} />
        </Button>
        <h1 className="text-lg font-bold hidden md:block">AstroFinance</h1>
      </div>

      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative text-white/70 hover:text-white"
        >
          <Bell size={20} />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-fintech-purple rounded-full"></span>
        </Button>
        
        <Avatar className="h-8 w-8 border border-fintech-card-border">
          <AvatarImage src="" />
          <AvatarFallback className="text-xs bg-fintech-dark">JD</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
