import { RiProfileLine } from 'react-icons/ri';

export default {
    name: 'about',
    title: 'About',
    type: 'document',
    icon: RiProfileLine,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'camino',
            title: 'Camino',
            type: 'section',
        },
        {
            name: 'founder',
            title: 'Founder',
            type: 'section',
        },
        {
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [{ type: 'section' }],
        },
    ],
};
