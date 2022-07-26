export default {
    name: 'section',
    title: 'Section',
    type: 'object',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
        },
        {
            name: 'tagline',
            title: 'Tagline',
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
    options: {
        collapsible: true,
        collapsed: true,
    },
};
