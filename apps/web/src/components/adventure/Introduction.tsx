import { PortableText } from '@portabletext/react';

import Details from '@/components/adventure/Details';

const Introduction = ({
    summary,
    tagline,
    difficulty,
    price,
    priceAddon,
    group,
    color,
    duration,
    distance,
    setOpen,
}) => {
    return (
        <section className="mx-auto my-12 max-w-5xl px-6 md:my-24 md:px-0">
            <h2
                className="tw-subheading"
                style={{
                    color: color,
                }}
            >
                {tagline}
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-x-24 gap-y-12 md:mt-24 md:grid-cols-5">
                <div className="prose col-span-1 font-serif prose-p:text-lg md:col-span-3 md:prose-p:text-3xl">
                    <PortableText value={summary} />
                </div>
                <Details
                    difficulty={difficulty}
                    price={price}
                    priceAddon={priceAddon}
                    group={group}
                    duration={duration}
                    distance={distance}
                    setOpen={setOpen}
                />
            </div>
        </section>
    );
};

export default Introduction;
