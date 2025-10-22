// config/server.js
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3000),

  // Public origin
  url: env('APP_URL', 'https://studio.raceready.com.au'),

  // Strapi v5 proxy settings
  proxy: { koa: true },

  app: {
    keys: env.array('APP_KEYS'),
  },

  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },

  vite: {
    server: {
      host: '0.0.0.0',
      port: 3000,
      allowedHosts: env.array('VITE_ALLOWED_HOSTS', []),
    },
  },
});
