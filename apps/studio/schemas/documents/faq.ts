import { RiQuestionLine } from 'react-icons/ri';

export default {
    name: 'faq',
    title: 'FAQ',
    type: 'document',
    icon: RiQuestionLine,
    fields: [
        {
            name: 'question',
            title: 'Question',
            type: 'string',
        },
        {
            name: 'answer',
            title: 'Answer',
            type: 'simplePortableText',
        },
        {
            name: 'order',
            title: 'Order',
            type: 'number',
        },
    ],
    preview: {
        select: {
            title: 'question',
            subtitle: 'order',
        },
    },
};
