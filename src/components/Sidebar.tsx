
import React from "react";
import { 
  LayoutDashboard, 
  CreditCard, 
  BarChart3, 
  PieChart, 
  History, 
  Settings, 
  Wallet,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const navItems = [
  { icon: <LayoutDashboard size={20} />, label: "Dashboard", path: "/" },
  { icon: <CreditCard size={20} />, label: "Cards", path: "/cards" },
  { icon: <Wallet size={20} />, label: "Accounts", path: "/accounts" },
  { icon: <History size={20} />, label: "Transactions", path: "/transactions" },
  { icon: <BarChart3 size={20} />, label: "Analytics", path: "/analytics" },
  { icon: <PieChart size={20} />, label: "Investments", path: "/investments" },
  { icon: <Settings size={20} />, label: "Settings", path: "/settings" },
];

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const location = useLocation();
  
  return (
    <>
      {/* Overlay for mobile */}
      {open && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-20"
          onClick={() => setOpen(false)}
        />
      )}
      
      <aside className={cn(
        "fixed md:sticky top-0 left-0 h-full z-30 md:z-0 w-64 bg-fintech-darker/90 backdrop-blur-xl border-r border-fintech-card-border transition-transform duration-300 ease-in-out",
        open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
        <div className="flex flex-col h-full p-4">
          <div className="flex items-center justify-center py-6">
            <h1 className="text-xl font-bold bg-gradient-to-r from-fintech-purple to-fintech-blue bg-clip-text text-transparent">
              AstroFinance
            </h1>
          </div>

          <nav className="mt-6 flex flex-col gap-2">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={index}
                  to={item.path}
                  className={cn("nav-item", isActive && "active")}
                  onClick={() => setOpen(false)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto pt-6 border-t border-fintech-card-border">
            <Link to="/logout" className="nav-item text-red-400 hover:text-red-300">
              <LogOut size={20} />
              <span>Log Out</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
