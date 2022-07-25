import { PortableText } from '@portabletext/react';

import Dates from '@/components/adventure/Dates';

const Introduction = ({ summary, slogan, color, dates }) => {
    return (
        <section
            className="mx-auto max-w-5xl py-24 px-3 text-center md:py-32 md:px-0 lg:text-left"
            id="intro"
        >
            <h2
                className="tw-subheading"
                style={{
                    color: color,
                }}
            >
                {slogan}
            </h2>
            <div className="grid grid-cols-1 gap-x-24 gap-y-12 md:grid-cols-5">
                <div className="prose col-span-1 font-serif prose-p:text-lg md:col-span-3 md:prose-p:text-3xl">
                    <PortableText value={summary} />
                </div>
                <Dates dates={dates} color={color} />
            </div>
        </section>
    );
};

export default Introduction;
