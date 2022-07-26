import { RiCompass3Line } from 'react-icons/ri';
import { status } from '../../data';

export default {
    name: 'adventure',
    title: 'Adventure',
    type: 'document',
    icon: RiCompass3Line,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200, // will be ignored if slugify is set
                slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
            },
        },
        {
            name: 'image',
            title: 'Image',
            type: 'imageCustom',
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
            description: 'What Camino route will be walked?',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            description: 'Price of the main package.',
        },
        {
            name: 'priceSingleSupplement',
            title: 'Single Supplement Price',
            type: 'number',
            description: 'Price of a single supplement.',
        },
        {
            name: 'group',
            title: 'Group',
            type: 'number',
            description: 'Min. number of person per group.',
        },
        {
            name: 'level',
            title: 'Level',
            type: 'level',
        },

        {
            name: 'duration',
            title: 'Duration',
            type: 'number',
        },
        {
            name: 'distance',
            title: 'Distance',
            type: 'number',
        },
        {
            name: 'availability',
            title: 'Availability',
            type: 'string',
            options: {
                list: [...status],
            },
        },
        {
            name: 'dates',
            title: 'Dates',
            type: 'array',
            of: [{ type: 'tripDate' }],
        },
        {
            name: 'services',
            title: 'Services',
            type: 'array',
            of: [{ type: 'service' }],
        },
        {
            name: 'slogan',
            title: 'Slogan',
            type: 'string',
        },
        {
            name: 'summary',
            title: 'Summary',
            type: 'complexPortableText',
        },
        {
            name: 'color',
            title: 'Color',
            type: 'color',
        },
        {
            name: 'highlights',
            title: 'Highlights',
            type: 'array',
            of: [{ type: 'highlight' }],
        },
        {
            name: 'itinerary',
            title: 'Itinerary',
            type: 'array',
            of: [{ type: 'stage' }],
        },
        {
            name: 'routeMap',
            title: 'Route Map',
            type: 'array',
            of: [{ type: 'place' }],
        },
    ],
};
