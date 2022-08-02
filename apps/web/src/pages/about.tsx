import { sanityClient } from '@/lib/sanity.server';
import { aboutPageQuery } from '@/lib/queries';

import Page from '@/components/shared/Page';
import Founder from '@/components/about/Founder';
import Features from '@/components/about/Features';
import Camino from '@/components/about/Camino';
import BookingSlideOver from '@/components/shared/BookingSlideOver';

const AboutPage = ({ about, adventures }) => {
    return (
        <Page
            metaTitle="About"
            metaDescription="Meet your Santiago Sherpa and the team behind Bukitt Camino, your deluxe ."
        >
            <Founder founder={about.founder} />
            <Features features={about.features} />
            <Camino camino={about.camino} />
            <BookingSlideOver adventures={adventures} />
        </Page>
    );
};

export default AboutPage;

export async function getStaticProps() {
    const data = await sanityClient.fetch(aboutPageQuery);
    return {
        props: {
            about: data.about,
            adventures: data.adventures,
        },
        revalidate: 10,
    };
}
