import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { sanityClient } from '@/lib/sanity.server';
import { storiesPageQuery } from '@/lib/queries';

import Page from '@/components/shared/Page';
import CategoryFilters from '@/components/story/CategoryFilters';
import Card from '@/components/story/Card';
import Tagline from '@/components/shared/Tagline';

const StoriesPage = ({ allStories }) => {
    const [stories] = useState(allStories);
    const [filteredStories, setFilteredStories] = useState(allStories);
    const [storyCategoryFilters] = useState(['guides', 'customer', 'spotlight']);
    const [activeFilter, setActiveFilter] = useState('all');

    const guideStories = allStories.filter((story) => story.category === 'guides');
    const customerStories = allStories.filter((story) => story.category === 'customer');
    const spotlightStories = allStories.filter((story) => story.category === 'spotlight');

    const allStoriesLength = allStories.length;
    const guideStoriesLength = guideStories.length;
    const customerStoriesLength = customerStories.length;
    const spotlightStoriesLength = spotlightStories.length;

    return (
        <Page
            metaTitle="Stories"
            metaDescription="Read the expert insights of our travel concierge and discover the many secrets of el Camino."
        >
            <section className="mx-auto my-12 max-w-2xl text-center">
                <Tagline>The many ways of the pilgrim</Tagline>
                <h1 className="mt-6 font-serif text-8xl font-bold uppercase">Camino Stories</h1>
            </section>
            <section>
                <CategoryFilters
                    stories={stories}
                    setFilteredStories={setFilteredStories}
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                    storyCategoryFilters={storyCategoryFilters}
                    allStoriesLength={allStoriesLength}
                    guideStoriesLength={guideStoriesLength}
                    customerStoriesLength={customerStoriesLength}
                    spotlightStoriesLength={spotlightStoriesLength}
                />
            </section>
            <section className="mx-auto mt-24 max-w-5xl">
                <motion.ul layout role="list" className="grid grid-cols-2 gap-12">
                    <AnimatePresence>
                        {filteredStories.map((story) => (
                            <Card key={story.id} story={story} />
                        ))}
                    </AnimatePresence>
                </motion.ul>
            </section>
        </Page>
    );
};

export default StoriesPage;

export async function getStaticProps() {
    const data = await sanityClient.fetch(storiesPageQuery);
    return {
        props: {
            allStories: data.stories,
        },
        revalidate: 10,
    };
}
