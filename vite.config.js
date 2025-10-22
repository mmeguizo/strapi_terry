 import { defineConfig } from 'vite';

export default defineConfig(() => ({
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: [
      'studio.raceready.com.au',
      'RaceReadyLB-1437582203.ap-southeast-2.elb.amazonaws.com',
      'localhost',
      '127.0.0.1',
    ],
    hmr: {
      protocol: 'wss',
      host: 'studio.raceready.com.au',
      port: 443,
    },
    strictPort: true,
  },
}));
 