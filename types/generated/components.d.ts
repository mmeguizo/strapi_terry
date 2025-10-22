import type { Schema, Struct } from '@strapi/strapi';

export interface SharedEventDocument extends Struct.ComponentSchema {
  collectionName: 'components_shared_event_document_s';
  info: {
    displayName: 'EventDocument ';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedFooterStyle extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_styles';
  info: {
    displayName: 'FooterStyle';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    textColor: Schema.Attribute.String;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    background: Schema.Attribute.String;
    eventDate: Schema.Attribute.Date;
    eventInfo: Schema.Attribute.String;
    eventLocation: Schema.Attribute.String;
    eventName: Schema.Attribute.String;
  };
}

export interface SharedHeroButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_button_s';
  info: {
    displayName: 'HeroButton ';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_menu_items';
  info: {
    displayName: 'MenuItem';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'SocialLink';
  };
  attributes: {
    platform: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedSponsor extends Struct.ComponentSchema {
  collectionName: 'components_shared_sponsors';
  info: {
    displayName: 'Sponsor';
  };
  attributes: {
    logo: Schema.Attribute.String;
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedWebsite extends Struct.ComponentSchema {
  collectionName: 'components_shared_websites';
  info: {
    displayName: 'Website';
  };
  attributes: {
    label: Schema.Attribute.String;
    logo: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.event-document': SharedEventDocument;
      'shared.footer-style': SharedFooterStyle;
      'shared.hero': SharedHero;
      'shared.hero-button': SharedHeroButton;
      'shared.menu-item': SharedMenuItem;
      'shared.social-link': SharedSocialLink;
      'shared.sponsor': SharedSponsor;
      'shared.website': SharedWebsite;
    }
  }
}
