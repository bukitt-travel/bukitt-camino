import { sanityClient } from '@/lib/sanity.server';
import { homePageQuery } from '@/lib/queries';

import Page from '@/components/shared/Page';
import Navigation from '@/components/navigation/Navigation';
import Adventures from '@/components/adventure/List';

const HomePage = ({ adventures }) => {
    return (
        <Page>
            <Navigation />
            <Adventures adventures={adventures} />

            <section className="flex min-h-screen flex-col items-center justify-center bg-stone-100">
                <h4>Curated Gear</h4>
                <p className="font-serif text-6xl">We take care of your ride and the gear</p>
            </section>
        </Page>
    );
};

export default HomePage;

export async function getStaticProps() {
    const data = await sanityClient.fetch(homePageQuery);
    return {
        props: {
            adventures: data.adventures,
        },
        revalidate: 10,
    };
}
