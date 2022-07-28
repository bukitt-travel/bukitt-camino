import { sanityClient } from '@/lib/sanity.server';
import { aboutPageQuery } from '@/lib/queries';

import Page from '@/components/shared/Page';
import Founder from '@/components/about/Founder';
import Features from '@/components/about/Features';
import Camino from '@/components/about/Camino';

const AboutPage = ({ about }) => {
    return (
        <Page
            metaTitle="About"
            metaDescription="Meet your Santiago Sherpa and the team behind Bukitt Camino, your deluxe ."
        >
            <Camino camino={about.camino} />
            <Features features={about.features} />
            <Founder founder={about.founder} />
        </Page>
    );
};

export default AboutPage;

export async function getStaticProps() {
    const data = await sanityClient.fetch(aboutPageQuery);
    return {
        props: {
            about: data.about,
        },
        revalidate: 10,
    };
}
