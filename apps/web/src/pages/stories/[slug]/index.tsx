import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { urlForImage } from '@/lib/sanity';

import { sanityClient } from '@/lib/sanity.server';
import { individualStoryQuery, storiesPathsQuery } from '@/lib/queries';

import Page from '@/components/shared/Page';
import BookingSlideOver from '@/components/shared/BookingSlideOver';

const StoryPage = ({ story, adventures }) => {
    return (
        <Page metaTitle={story.title} metaDescription={story.summary}>
            <div className="mx-auto max-w-2xl py-12">
                <h2 className="text-lg font-semibold uppercase text-stone-700">{story.category}</h2>
                <h1 className="mt-2 font-serif text-5xl font-bold uppercase">{story.title}</h1>

                <div className="mt-6">
                    {story.image && (
                        <Image
                            src={urlForImage(story.image).width(1920).height(1440).url()}
                            alt="Bukitt Founder Mariana Riquezes"
                            layout="responsive"
                            width={4}
                            height={3}
                            objectFit="cover"
                            objectPosition="center"
                        />
                    )}
                </div>
                <h2 className="mt-6 text-2xl">{story.summary}</h2>
                <div className="rp prose-lg mt-12">
                    <PortableText value={story.content} />
                </div>
            </div>
            <BookingSlideOver adventures={adventures} />
        </Page>
    );
};

export default StoryPage;

export async function getStaticPaths() {
    const paths = await sanityClient.fetch(storiesPathsQuery);

    return {
        paths: paths.map((slug) => ({ params: { slug } })),
        fallback: 'blocking',
    };
}

export async function getStaticProps({ params }) {
    const { story, adventures } = await sanityClient.fetch(individualStoryQuery, {
        slug: params.slug,
    });

    return {
        props: {
            story,
            adventures,
        },
        revalidate: 10,
    };
}
