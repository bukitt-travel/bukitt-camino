import { RiBookOpenLine } from 'react-icons/ri';
import { difficulty, status } from '../../data';

export default {
    name: 'adventure',
    title: 'Adventure',
    type: 'document',
    icon: RiBookOpenLine,
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
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'group',
            title: 'Group',
            type: 'number',
        },
        {
            name: 'difficulty',
            title: 'Difficulty',
            type: 'string',
            options: {
                list: [...difficulty],
            },
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
            name: 'startDate',
            title: 'Start Date',
            type: 'date',
            options: {
                dateFormat: 'MM-DD-YYYY',
                calendarTodayLavel: 'Today',
            },
        },
        {
            name: 'endDate',
            title: 'End Date',
            type: 'date',
            options: {
                dateFormat: 'MM-DD-YYYY',
                calendarTodayLavel: 'Today',
            },
        },
        {
            name: 'services',
            title: 'Services',
            type: 'array',
            of: [{ type: 'service' }],
        },
        {
            name: 'tagline',
            title: 'Tagline',
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
    ],
};
