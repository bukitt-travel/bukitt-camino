export default {
    name: 'imageGallery',
    title: 'Image Gallery',
    type: 'object',
    fields: [
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
                {
                    name: 'image',
                    title: 'Image',
                    type: 'imageCustom',
                },
            ],
            options: {
                layout: 'grid',
            },
        },
    ],
};
