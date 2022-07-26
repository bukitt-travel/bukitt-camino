import { RiBallPenLine } from 'react-icons/ri';
import { storyCategory } from '../../data';

export default {
    name: 'story',
    title: 'Story',
    icon: RiBallPenLine,
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200, // will be ignored if slugify is set
                slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
            },
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [...storyCategory],
            },
        },
        {
            name: 'summary',
            title: 'Summary',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'imageCustom',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'complexPortableText',
        },
    ],
};
