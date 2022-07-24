export default {
    name: 'teamMember',
    title: 'Team Member',
    type: 'object',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'role',
            title: 'Role',
            type: 'string',
        },
        {
            name: 'profileImage',
            title: 'Profile Image',
            type: 'imageCustom',
        },
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'role',
            media: 'profileImage',
        },
    },
};
