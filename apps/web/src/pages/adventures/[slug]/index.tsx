import Image from 'next/image';
import { useState } from 'react';
import { InformationCircleIcon } from '@heroicons/react/outline';

import { urlForImage } from '@/lib/sanity';
import { sanityClient } from '@/lib/sanity.server';
import { individualAdventureQuery, adventuresPathsQuery } from '@/lib/queries';

import Page from '@/components/shared/Page';
import Navigation from '@/components/navigation/Navigation';
import SlideOver from '@/components/adventure/SlideOver';
import Tabs from '@/components/adventure/Tabs';

const AdventurePage = ({ adventure }) => {
    const [open, setOpen] = useState(false);

    const title = adventure.title.split(' ');
    return (
        <Page>
            <Navigation />
            <SlideOver open={open} setOpen={setOpen} adventure={adventure} />

            <section
                className="flex min-h-screen flex-col py-24"
                style={{
                    backgroundColor: adventure.bgColor,
                }}
            >
                <div className="text-center">
                    <h2 className="relative z-10 flex flex-col font-serif text-2xl font-light italic">
                        Camino Francés
                    </h2>
                    <h1 className="relative z-10 mt-3 flex flex-col font-serif text-9xl font-bold uppercase">
                        {title.map((word, idx) => (
                            <span key={idx}>{word}</span>
                        ))}
                    </h1>
                </div>

                <div className="z-0 mx-auto -mt-12 w-3/5">
                    <Image
                        src={urlForImage(adventure.image).url()}
                        alt="Camino de Santiago"
                        layout="responsive"
                        width={4}
                        height={3}
                        objectFit="cover"
                        objectPosition="center"
                    />
                </div>
                <div className="mt-12 flex items-center justify-center">
                    <button
                        onClick={() => setOpen(true)}
                        className="flex justify-center gap-x-2 text-2xl"
                    >
                        <InformationCircleIcon className="w-6" />
                        <span className="font-serif text-2xl">Trip Details</span>
                    </button>
                </div>
            </section>

            {/* <Tabs /> */}

            <section></section>
        </Page>
    );
};

export default AdventurePage;

export async function getStaticPaths() {
    const paths = await sanityClient.fetch(adventuresPathsQuery);

    return {
        paths: paths.map((slug) => ({ params: { slug } })),
        fallback: 'blocking',
    };
}

export async function getStaticProps({ params }) {
    const { adventure } = await sanityClient.fetch(individualAdventureQuery, {
        slug: params.slug,
    });

    return {
        props: {
            adventure,
        },
        revalidate: 10,
    };
}
