export default {
    name: 'imageCustom',
    type: 'image',
    title: 'Image Custom',
    options: {
        hotspot: true,
    },
    fields: [
        {
            name: 'alt',
            title: 'Alt',
            type: 'string',
            options: {
                isHighlighted: true,
            },
        },
        {
            name: 'caption',
            title: 'Caption',
            type: 'string',
        },
    ],
};
