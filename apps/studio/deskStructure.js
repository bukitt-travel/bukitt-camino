import S from '@sanity/desk-tool/structure-builder';
import { IoShareSocialOutline, IoSettingsOutline, IoAtOutline } from 'react-icons/io5';

export default () =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Site Settings')
                .icon(IoSettingsOutline)
                .child(
                    S.list()
                        .title('Site Settings')
                        .items([
                            S.listItem()
                                .title('Socials')
                                .icon(IoShareSocialOutline)
                                .child(
                                    S.document()
                                        .schemaType('socials')
                                        .documentId('socials')
                                        .title('Socials'),
                                ),
                            S.listItem()
                                .title('Contacts')
                                .icon(IoAtOutline)
                                .child(
                                    S.document()
                                        .schemaType('contacts')
                                        .documentId('contacts')
                                        .title('Contacts'),
                                ),
                        ]),
                ),

            S.divider(),

            ...S.documentTypeListItems().filter(
                (item) => !['socials', 'contacts'].includes(item.getId()),
            ),
        ]);
