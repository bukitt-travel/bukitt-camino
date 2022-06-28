import { IoAtOutline } from 'react-icons/io5';

export default {
  name: 'contacts',
  title: 'Contacts',
  type: 'document',
  icon: IoAtOutline,
  initialValue: {
    email: 'mailto:',
    phone: 'tel:',
  },
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'url',
      description: 'Contact email.',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['mailto'],
        }).error('Must follow the format mailto:name@domain.com'),
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'url',
      description: 'Contact phone number.',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['tel'],
        }).error('Must follow the format tel:689123123'),
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
      description: 'Physical address.',
    },
  ],
};
