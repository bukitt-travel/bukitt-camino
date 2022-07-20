import { RiChatQuoteLine } from 'react-icons/ri';

export default {
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    icon: RiChatQuoteLine,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
        },
        {
            name: 'quote',
            title: 'Quote',
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
