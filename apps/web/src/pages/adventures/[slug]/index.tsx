import { useState } from 'react';

import { sanityClient } from '@/lib/sanity.server';
import { individualAdventureQuery, adventuresPathsQuery } from '@/lib/queries';

import Page from '@/components/shared/Page';
import Navigation from '@/components/navigation/Navigation';
import ServicesSlideOver from '@/components/adventure/ServicesSlideOver';
import Introduction from '@/components/adventure/Introduction';
import ActionsMenu from '@/components/adventure/ActionsMenu';
import BookingSlideOver from '@/components/shared/BookingSlideOver';
import Hero from '@/components/adventure/Hero';

const AdventurePage = ({ adventure }) => {
    const [openServices, setOpenServices] = useState(false);
    const [openBooking, setOpenBooking] = useState(false);

    return (
        <Page>
            <Navigation />
            <ServicesSlideOver
                open={openServices}
                setOpen={setOpenServices}
                adventure={adventure}
            />
            <BookingSlideOver open={openBooking} setOpen={setOpenBooking} />
            <Hero adventure={adventure} setOpen={setOpenServices} />
            <Introduction
                tagline={adventure.tagline}
                summary={adventure.summary}
                group={adventure.group}
                price={adventure.price}
                difficulty={adventure.difficulty}
                color={adventure.color}
                duration={adventure.duration}
                distance={adventure.distance}
            />
            <ActionsMenu
                adventure={adventure}
                setOpenBooking={setOpenBooking}
                setOpenServices={setOpenServices}
            />
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
