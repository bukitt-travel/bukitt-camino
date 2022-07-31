import { RiTShirt2Line } from 'react-icons/ri';

export default {
    name: 'gear',
    title: 'Gear',
    type: 'document',
    icon: RiTShirt2Line,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'order',
            title: 'Order',
            type: 'number',
        },
        {
            name: 'brand',
            title: 'Brand',
            type: 'string',
        },
        {
            name: 'model',
            title: 'Model',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'simplePortableText',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'imageCustom',
        },
    ],

    preview: {
        select: {
            name: 'name',
            brand: 'brand',
            model: 'model',
            order: 'order',
        },
        prepare: ({ name, brand, model, order }) => {
            name = name ? name : '';
            model = model ? model : '';
            brand = brand ? `by ${brand}` : '';
            order = order ? order : '';
            return {
                title: name,
                subtitle: `${order} ${model} ${brand}`,
            };
        },
    },
};
