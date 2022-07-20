import imageUrlBuilder from '@sanity/image-url';

import { config } from '@/lib/config';

export const builder = imageUrlBuilder(config);

export const urlForImage = (source) => builder.image(source).auto('format');
