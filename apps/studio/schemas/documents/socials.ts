import { IoShareSocialOutline } from 'react-icons/io5';

export default {
  name: 'socials',
  title: 'Socials',
  icon: IoShareSocialOutline,
  type: 'document',
  fields: [
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
      description: 'Enter full URL of Instagram profile.',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    },

    {
      name: 'facebook',
      title: 'Facebook',
      type: 'url',
      description: 'Enter full URL of Facebook profile.',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    },

    {
      name: 'twitter',
      title: 'Twitter',
      type: 'url',
      description: 'Enter full URL of Twitter profile.',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    },
  ],
};
