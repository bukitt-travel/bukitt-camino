import { sanityClient } from '@/lib/sanity.server';
import { homePageQuery } from '@/lib/queries';

import Page from '@/components/shared/Page';
import Hero from '@/components/home/Hero';
import Adventures from '@/components/home/Adventures';
import Testimonials from '@/components/home/Testimonials';
import Gear from '@/components/home/Gear';
import BookingSlideOver from '@/components/shared/BookingSlideOver';

const HomePage = ({ adventures, testimonials, gear }) => {
    return (
        <Page
            metaTitle="Home"
            metaDescription="Experience luxury and tradition of el Camino de Santiago."
        >
            <Hero />

            <Adventures adventures={adventures} />

            <Testimonials testimonials={testimonials} />

            <Gear gear={gear} />

            <BookingSlideOver adventures={adventures} />
        </Page>
    );
};

export default HomePage;

export async function getStaticProps() {
    const data = await sanityClient.fetch(homePageQuery);
    return {
        props: {
            adventures: data.adventures,
            testimonials: data.testimonials,
            gear: data.gear,
        },
        revalidate: 10,
    };
}
