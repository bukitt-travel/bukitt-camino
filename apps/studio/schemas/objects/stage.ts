import { RiPinDistanceFill } from 'react-icons/ri';
import { transportation, activity } from '../../data';

export default {
    name: 'stage',
    title: 'Stage',
    type: 'object',
    icon: RiPinDistanceFill,
    fields: [
        {
            name: 'locationFrom',
            title: 'Location From',
            type: 'string',
        },
        {
            name: 'locationTo',
            title: 'Location To',
            type: 'string',
        },
        {
            name: 'dayFrom',
            title: 'Day From',
            type: 'number',
        },
        {
            name: 'dayTo',
            title: 'Day To',
            type: 'number',
        },
        {
            name: 'transportation',
            title: 'Transportation',
            type: 'string',
            options: {
                list: [...transportation],
            },
            description: 'Mode of transportation.',
        },
        {
            name: 'activity',
            title: 'Activity',
            type: 'string',
            options: {
                list: [...activity],
            },
            description: 'Type of activity.',
        },
        {
            name: 'stageNumber',
            title: 'Stage Number',
            type: 'number',
            description: 'Number of the route stage.',
        },
        {
            name: 'distance',
            title: 'Distance',
            type: 'number',
            validation: (Rule) => Rule.min(0).max(1000),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
    preview: {
        select: {
            distance: 'distance',
            to: 'locationTo',
            from: 'locationFrom',
            start: 'dayFrom',
            end: 'dayTo',
        },
        prepare: ({ from, to, distance, start, end }) => {
            from = from ? from : '';
            to = to ? `- ${to}` : '';
            start = start ? `day ${start}` : '';
            end = end ? ` - ${end}` : '';
            distance = distance ? `${distance}km /` : '';
            return {
                title: `${from} ${to}`,
                subtitle: `${distance} ${start} ${end}`,
            };
        },
    },
};
