// src/admin/vite.config.js (or .ts)
import { defineConfig, mergeConfig } from 'vite';

export default (config) =>
  mergeConfig(config, {
    server: {
      host: '0.0.0.0',
      // Do not use 3000 here; Strapi API uses 3000 in dev
      allowedHosts: [
        'studio.raceready.com.au',
        'RaceReadyLB-1437582203.ap-southeast-2.elb.amazonaws.com',
        'localhost',
        '127.0.0.1',
        // Or allow a base domain:
        // '.raceready.com.au'
      ],
      hmr: {
        protocol: 'wss',
        host: 'studio.raceready.com.au',
        port: 443,
      },
      strictPort: true,
    },
  });
