// @ts-ignore
import createSchema from 'part:@sanity/base/schema-creator';
// @ts-ignore
import schemaTypes from 'all:part:@sanity/base/schema-type';

import adventure from './documents/adventure';
import about from './documents/about';
import contacts from './documents/contacts';
import socials from './documents/socials';
import faq from './documents/faq';
import testimonial from './documents/testimonial';
import gear from './documents/gear';
import story from './documents/story';

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
import tripDate from './objects/tripDate';

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([
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
        highlight,
        stage,
        section,
        tripDate,
        level,
        imageGallery,
        imageCustom,
        portableComplex,
        portableSimple,
    ]),
});
