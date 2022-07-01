import { serviceCategory } from '../../data';

export default {
    name: 'service',
    title: 'Service',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [...serviceCategory],
            },
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'image',
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'category',
            media: 'icon',
        },
    },
};
