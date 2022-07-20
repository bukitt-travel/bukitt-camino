import { useEffect } from 'react';

const CategoryFilters = ({
    stories,
    setFilteredStories,
    activeFilter,
    setActiveFilter,
    storyCategoryFilters,
    allStoriesLength,
    guideStoriesLength,
    customerStoriesLength,
    spotlightStoriesLength,
}) => {
    useEffect(() => {
        if (activeFilter === 'all') {
            setFilteredStories(stories);
            return;
        }

        const filtered = stories.filter((story) => story.category === activeFilter);

        setFilteredStories(filtered);
    }, [activeFilter]);

    return (
        <section className="mx-auto mt-16 max-w-5xl md:mt-20 lg:mt-24">
            <div className="flex items-center justify-evenly">
                <button
                    type="button"
                    className={`tw-transition uppercase ${
                        activeFilter === 'all' && 'font-semibold text-stone-900'
                    }`}
                    onClick={() => {
                        setActiveFilter('all');
                    }}
                >
                    <span className="text-lg uppercase">all</span>
                    <span className="ml-1 text-xs font-light text-neutral-700">
                        {allStoriesLength}
                    </span>
                </button>

                {storyCategoryFilters.map((categoryFilter, idx) => (
                    <button
                        key={idx}
                        type="button"
                        className={`tw-transition text-xs uppercase md:text-sm lg:text-base ${
                            activeFilter === categoryFilter && 'font-semibold text-stone-900'
                        }`}
                        onClick={() => {
                            setActiveFilter(categoryFilter);
                        }}
                    >
                        <span className="uppercase">{categoryFilter}</span>
                        {categoryFilter === 'guides' && (
                            <span className="ml-1 text-xs text-neutral-500 md:text-sm lg:text-base">
                                {guideStoriesLength}
                            </span>
                        )}
                        {categoryFilter === 'customer' && (
                            <span className="ml-1 text-xs font-light text-neutral-700">
                                {customerStoriesLength}
                            </span>
                        )}
                        {categoryFilter === 'spotlight' && (
                            <span className="ml-1 text-xs font-light text-neutral-700">
                                {spotlightStoriesLength}
                            </span>
                        )}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default CategoryFilters;
