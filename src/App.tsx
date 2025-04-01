
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Cards from "./pages/Cards";
import Accounts from "./pages/Accounts";
import Transactions from "./pages/Transactions";
import Analytics from "./pages/Analytics";
import Investments from "./pages/Investments";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cards" element={<Index />}>
            <Route index element={<Cards />} />
          </Route>
          <Route path="/accounts" element={<Index />}>
            <Route index element={<Accounts />} />
          </Route>
          <Route path="/transactions" element={<Index />}>
            <Route index element={<Transactions />} />
          </Route>
          <Route path="/analytics" element={<Index />}>
            <Route index element={<Analytics />} />
          </Route>
          <Route path="/investments" element={<Index />}>
            <Route index element={<Investments />} />
          </Route>
          <Route path="/settings" element={<Index />}>
            <Route index element={<Settings />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
