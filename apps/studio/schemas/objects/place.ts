import { RiMapPin2Fill } from 'react-icons/ri';

export default {
    name: 'place',
    title: 'Place',
    type: 'object',
    icon: RiMapPin2Fill,
    fields: [
        {
            name: 'order',
            title: 'Order',
            type: 'number',
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
        },
        {
            name: 'coordinates',
            title: 'Coordinates',
            type: 'geopoint',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
    ],
    preview: {
        select: {
            title: 'location',
            subtitle: 'order',
        },
    },
};
