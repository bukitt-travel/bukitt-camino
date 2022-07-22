import { level } from '../../data';

export default {
    name: 'level',
    title: 'Level',
    type: 'object',
    fields: [
        {
            name: 'minLevel',
            title: 'Min Level',
            type: 'string',
            options: {
                list: [...level],
            },
        },
        {
            name: 'maxLevel',
            title: 'Max Level',
            type: 'string',
            options: {
                list: [...level],
            },
        },
    ],
};
