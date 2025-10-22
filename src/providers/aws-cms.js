'use strict';

const aws = require('@aws-sdk/client-s3');

module.exports = {
  init(config) {
    const s3 = new aws.S3Client({
      region: config.s3Options.region,
      credentials: {
        accessKeyId: config.s3Options.accessKeyId,
        secretAccessKey: config.s3Options.secretAccessKey,
      },
    });

    const Bucket = config.s3Options.params.Bucket;
    const baseUrl = config.baseUrl || '';

    return {
      async upload(file) {
        const fileKey = `cms/${file.hash}${file.ext}`;

        await s3.send(
          new aws.PutObjectCommand({
            Bucket,
            Key: fileKey,
            Body: file.stream || Buffer.from(file.buffer, 'binary'),
            ContentType: file.mime,
          })
        );

        file.url = `${baseUrl}/${fileKey}`;
      },

      async delete(file) {
        const fileKey = file.url.split(`${baseUrl}/`)[1];

        await s3.send(
          new aws.DeleteObjectCommand({
            Bucket,
            Key: fileKey,
          })
        );
      },
    };
  },
};
