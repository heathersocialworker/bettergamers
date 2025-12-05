import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.03f4e38589eb4bbcb82425d11e778436',
  appName: 'bettergamers',
  webDir: 'dist',
  server: {
    url: 'https://03f4e385-89eb-4bbc-b824-25d11e778436.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  ios: {
    contentInset: 'automatic',
    backgroundColor: '#0A1628'
  },
  android: {
    backgroundColor: '#0A1628'
  }
};

export default config;