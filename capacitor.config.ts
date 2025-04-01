
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.e7a6f08242794a348f053715843bfb9f',
  appName: 'astro-finance-glow',
  webDir: 'dist',
  server: {
    url: 'https://e7a6f082-4279-4a34-8f05-3715843bfb9f.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  // Enable hideable status bar
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#121212",
      showSpinner: true,
      spinnerColor: "#8A42DB"
    }
  }
};

export default config;
