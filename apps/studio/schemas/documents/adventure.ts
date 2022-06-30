import { RiBookOpenLine } from 'react-icons/ri';
import { difficulty } from '../../data';

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
            name: 'startingPrice',
            title: 'Starting Price',
            type: 'number',
        },
        {
            name: 'level',
            title: 'Level',
            type: 'string',
            options: {
                list: [...difficulty],
            },
        },
        {
            name: 'group',
            title: 'Group',
            type: 'number',
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
            name: 'bgColor',
            title: 'Background Color',
            type: 'color',
        },
    ],
};
