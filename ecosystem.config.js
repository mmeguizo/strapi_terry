module.exports = {
  apps: [
    {
      name: "studio.raceready.com.au",
      cwd: "/apps/studio.raceready.com.au",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        HOST: "0.0.0.0",
        PORT: 3020,
        APP_URL: "https://studio.raceready.com.au",
      },
    },
  ],
};
