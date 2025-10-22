const path = require('path');

module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: '/apps/studio.raceready.com.au/src/providers/aws-cms',
      providerOptions: {
        s3Options: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_SECRET_ACCESS_KEY'),
          region: env('AWS_REGION', 'ap-southeast-2'),
          params: {
            Bucket: env('AWS_BUCKET_NAME', 'cdn.syzmic.com.au'),
          },
        },
        baseUrl: `${env('AWS_CDN_BASE_URL')}`,
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },

  email: {
    config: {
      provider: path.resolve(__dirname, '../src/extensions/email-nodemailer'),
      providerOptions: {
        host: env('MAILGUN_SMTP_HOST'),
        port: env.int('MAILGUN_SMTP_PORT', 587),
        auth: {
          user: env('MAILGUN_SMTP_USER'),
          pass: env('MAILGUN_SMTP_PASS'),
        },
      },
      settings: {
        defaultFrom: env('EMAIL_DEFAULT_FROM', 'noreply@raceready.app'),
        defaultReplyTo: env('EMAIL_DEFAULT_REPLY_TO', 'support@raceready.app'),
      },
    },
  },
});
