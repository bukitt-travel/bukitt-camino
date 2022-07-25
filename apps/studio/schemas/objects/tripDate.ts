import { RiCalendar2Line } from 'react-icons/ri';

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
            options: {
                dateFormat: 'MMMM Do YYYY',
                calendarTodayLabel: 'Today',
            },
        },
        {
            name: 'endDate',
            title: 'End Date',
            type: 'date',
            options: {
                dateFormat: 'MMMM Do YYYY',
                calendarTodayLabel: 'Today',
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
