import { useState } from 'react';

import { sanityClient } from '@/lib/sanity.server';
import { individualAdventureQuery, adventuresPathsQuery } from '@/lib/queries';

import Page from '@/components/shared/Page';
import ServicesSlideOver from '@/components/adventure/ServicesSlideOver';
import Introduction from '@/components/adventure/Introduction';
import ActionsMenu from '@/components/adventure/ActionsMenu';
import Hero from '@/components/adventure/Hero';
import Highlights from '@/components/adventure/Highlights';
import Itinerary from '@/components/adventure/Itinerary';
import Map from '@/components/adventure/Map';
import Services from '@/components/adventure/Services';
import Details from '@/components/adventure/Details';
import BookingSlideOver from '@/components/shared/BookingSlideOver';

const AdventurePage = ({ adventure }) => {
    const adventures = [adventure];
    const [openServices, setOpenServices] = useState(false);

    const includedServices = adventure?.services?.filter(
        (service) => service?.category === 'included',
    );
    const notIncludedServices = adventure?.services?.filter(
        (service) => service?.category === 'not included',
    );
    const addOnServices = adventure?.services?.filter((service) => service?.category === 'add on');

    return (
        <Page metaTitle={adventure?.title} metaDescription={adventure?.summary}>
            <Hero adventure={adventure} />
            <Details
                level={adventure.level}
                price={adventure.price}
                priceSingleSupplement={adventure.priceSingleSupplement}
                group={adventure.group}
                duration={adventure.duration}
                distance={adventure.distance}
                setOpen={setOpenServices}
            />

            <Introduction
                slogan={adventure.slogan}
                summary={adventure.summary}
                color={adventure.color}
                dates={adventure.dates}
            />

            <Highlights highlights={adventure.highlights} color={adventure.color} />

            <Itinerary itinerary={adventure.itinerary} color={adventure.color} />

            <section className="h-screen w-full py-24 md:py-32">
                <Map routeMap={adventure.routeMap} color={adventure.color} />
            </section>

            <Services
                includedServices={includedServices}
                notIncludedServices={notIncludedServices}
                addOnServices={addOnServices}
                color={adventure.color}
            />

            <ActionsMenu setOpenServices={setOpenServices} />

            <ServicesSlideOver
                title={adventure.title}
                includedServices={includedServices}
                notIncludedServices={notIncludedServices}
                addOnServices={addOnServices}
                open={openServices}
                setOpen={setOpenServices}
            />

            <BookingSlideOver adventures={adventures} />
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
