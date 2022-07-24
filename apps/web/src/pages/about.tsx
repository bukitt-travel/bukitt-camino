import Image from 'next/image';
import { PortableText } from '@portabletext/react';

import { sanityClient } from '@/lib/sanity.server';
import { aboutPageQuery } from '@/lib/queries';

import Page from '@/components/shared/Page';
import Founder from '@/components/about/Founder';

const AboutPage = ({ about }) => {
    return (
        <Page
            metaTitle="About"
            metaDescription="Meet your Santiago Sherpa and the team behind Bukitt Camino, your deluxe ."
        >
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
