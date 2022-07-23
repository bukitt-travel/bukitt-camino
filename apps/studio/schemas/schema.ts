// First, we must import the schema creator
// @ts-ignore
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
// @ts-ignore
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document types
import adventure from './documents/adventure';
import about from './documents/about';
import contacts from './documents/contacts';
import socials from './documents/socials';
import faq from './documents/faq';
import testimonial from './documents/testimonial';
import gear from './documents/gear';
import story from './documents/story';

// Module types

// We don't have any modules at this point. See this for inspiration:
// https://github.com/ndimatteo/HULL/tree/main/studio/schemas/modules

// Object types
import portableComplex from './objects/portableComplex';
import portableSimple from './objects/portableSimple';
import service from './objects/service';
import highlight from './objects/highlight';
import stage from './objects/stage';
import place from './objects/place';
import section from './objects/section';
import level from './objects/level';
import imageGallery from './objects/imageGallery';
import imageCustom from './objects/imageCustom';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: 'default',
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        // The following are document types which will appear
        // in the studio.
        adventure,
        service,
        about,
        socials,
        contacts,
        faq,
        testimonial,
        gear,
        story,
        place,
        // When added to this list, object types can be used as
        // { type: 'typename' } in other document schemas
        highlight,
        stage,
        section,
        level,
        imageGallery,
        imageCustom,
        portableComplex,
        portableSimple,
    ]),
});
