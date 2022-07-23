export default {
    name: 'highlight',
    title: 'Highlight',
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
            options: {
                hotspot: true,
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'simplePortableText',
        },
        {
            name: 'gallery',
            title: 'Gallery',
            type: 'imageGallery',
        },
    ],
    options: {
        collapsible: true,
        collapsed: false,
    },
    preview: {
        select: {
            title: 'title',
            media: 'icon',
        },
    },
};
