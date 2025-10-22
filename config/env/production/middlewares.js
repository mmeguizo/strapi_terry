module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ['https://studio.raceready.com.au'],        // ✅ echoes back the request Origin dynamically
      credentials: true,
    },
  },
  {
    name: 'strapi::session',
    config: {
      cookie: {
        secure: true,
        sameSite: 'none',
      },
    },
  },
  'strapi::logger',
  'strapi::body',
  'strapi::query',
  'strapi::favicon',
  'strapi::public',
];
