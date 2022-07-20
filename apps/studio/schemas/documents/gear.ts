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
            name: 'description',
            title: 'Description',
            type: 'simplePortableText',
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
};
