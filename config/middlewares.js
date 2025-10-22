// config/middlewares.js  TOP of the array
module.exports = [
  async (ctx, next) => {
    if (ctx.path === '/_headers') {
      ctx.body = {
        secure: ctx.secure,
        proto: ctx.get('x-forwarded-proto'),
        host: ctx.host,
        proxyKoa:
          !!(strapi.config.get('server.proxy')
          && strapi.config.get('server.proxy').koa),
        url: strapi.config.get('server.url'),
      };
      return;
    }
    await next();
  },

  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ['https://studio.raceready.com.au'],
      credentials: true,
    },
  },
  {
    name: 'strapi::session',
    config: {
      cookie: {
        secure: true,
        // if admin and API are same-site, use 'lax'
        sameSite: 'lax',
        path: '/admin',          // scope the admin cookie to the admin UI
      },
    },
  },
  'strapi::logger',
  'strapi::body',
  'strapi::query',
  'strapi::favicon',
  'strapi::public',
];
