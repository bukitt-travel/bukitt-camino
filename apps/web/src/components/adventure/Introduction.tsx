import { PortableText } from '@portabletext/react';

import Details from '@/components/adventure/Details';

const Introduction = ({
    summary,
    tagline,
    difficulty,
    price,
    group,
    color,
    duration,
    distance,
}) => {
    return (
        <section className="mx-auto my-24 max-w-5xl px-6 md:px-0">
            <h2
                className="text-center text-6xl font-bold uppercase"
                style={{
                    color: color,
                }}
            >
                {tagline}
            </h2>
            <div className="mt-24 grid grid-cols-1 items-center gap-x-24 gap-y-12 md:grid-cols-5">
                <div className="prose col-span-1 font-serif md:col-span-3 md:prose-p:text-3xl">
                    <PortableText value={summary} />
                </div>
                <Details
                    difficulty={difficulty}
                    price={price}
                    group={group}
                    duration={duration}
                    distance={distance}
                />
            </div>
        </section>
    );
};

export default Introduction;
