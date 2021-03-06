import { RiCalendar2Line } from 'react-icons/ri';
import { availability } from '../../data';

export default {
    name: 'tripDate',
    title: 'Trip Date',
    type: 'object',
    icon: RiCalendar2Line,
    fields: [
        {
            name: 'startDate',
            title: 'Start Date',
            type: 'date',
        },
        {
            name: 'endDate',
            title: 'End Date',
            type: 'date',
        },
        {
            name: 'availability',
            title: 'Availability',
            type: 'string',
            options: {
                list: [...availability],
            },
        },
    ],
    preview: {
        select: {
            title: 'startDate',
            subtitle: 'endDate',
        },
    },
};
