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
            name: 'infoCamino',
            title: 'Camino',
            type: 'section',
        },
        {
            name: 'founder',
            title: 'Founder',
            type: 'section',
        },
        {
            name: 'team',
            title: 'Team',
            type: 'array',
            of: [{ type: 'teamMember' }],
        },
    ],
};
