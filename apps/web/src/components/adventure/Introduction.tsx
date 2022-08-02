import { PortableText } from '@portabletext/react';

import Dates from '@/components/adventure/Dates';

const Introduction = ({ summary, slogan, color, dates }) => {
    return (
        <section
            className="mx-auto grid max-w-5xl grid-cols-1 gap-y-6 px-3 pt-32 pb-16 text-center lg:grid-cols-5 lg:gap-x-12 lg:gap-y-0 lg:px-0 lg:text-left"
            id="intro"
        >
            <div className="col-span-1 lg:col-span-3">
                <h2
                    className="tw-subheading"
                    style={{
                        color: color,
                    }}
                >
                    {slogan}
                </h2>
                <div className="prose font-serif prose-p:text-lg lg:prose-p:text-2xl">
                    <PortableText value={summary} />
                </div>
            </div>
            <div className="col-span-1 lg:col-span-2">
                <Dates dates={dates} color={color} />
            </div>
        </section>
    );
};

export default Introduction;
