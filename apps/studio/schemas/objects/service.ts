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
            name: 'price',
            title: 'Price',
            type: 'number',
            hidden: ({ parent }) => parent.category !== 'add on',
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'imageCustom',
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
