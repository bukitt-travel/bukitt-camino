export default {
    name: 'feature',
    title: 'Feature',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'image',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'complexPortableText',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
    ],
    options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: false, // Defines if the fieldset should be collapsed by default or not
    },
    preview: {
        select: {
            title: 'title',
            media: 'icon',
        },
    },
};
