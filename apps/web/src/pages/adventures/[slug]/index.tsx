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
import Dates from '@/components/adventure/Dates';

const AdventurePage = ({ adventure }) => {
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

            <Introduction
                slogan={adventure.slogan}
                summary={adventure.summary}
                group={adventure.group}
                price={adventure.price}
                priceSingleSupplement={adventure.priceSingleSupplement}
                level={adventure.level}
                color={adventure.color}
                duration={adventure.duration}
                distance={adventure.distance}
                setOpen={setOpenServices}
            />

            <Dates dates={adventure.dates} color={adventure.color} />

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
