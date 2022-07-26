export default {
    name: 'imageCustom',
    title: 'Image Custom',
    type: 'image',
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
