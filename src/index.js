'use strict';

module.exports = {
  /**
   * Register function - runs before your application initializes
   */
  register({ strapi }) {
    // Extend the Upload plugin's file content type with a "site" dropdown
    const fileModel = strapi.contentTypes['plugin::upload.file'];

    fileModel.attributes.site = {
      type: 'enumeration',
      enum: [
        'raceready',
        'motorrace',
        'supertt',
        'clubmanchampionship',
        'mx5cup',
        'wakefield300',
        'sydney300',
        'mx5nationals',
        'extremett',
        'raceofficial',
        'classicsportscars',
        'raceevents',
        'tc2',
        'rallysprint',
        'amrc',
        'aprabathurstchallenge',
        'iprabathurstchallenge',
        'common'
      ],
      default: 'common',
      required: true,
    };
  },

  /**
   * Bootstrap function - runs before your application starts
   */
  bootstrap(/*{ strapi }*/) {},
};
