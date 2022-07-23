import Image from 'next/image';

import { sanityClient } from '@/lib/sanity.server';
import { aboutPageQuery } from '@/lib/queries';
import { urlForImage } from '@/lib/sanity';

import Page from '@/components/shared/Page';

const AboutPage = ({ about }) => {
    return (
        <Page
            metaTitle="About"
            metaDescription="Meet your Santiago Sherpa and the team behind Bukitt Camino, your deluxe ."
        >
            <section className="mx-auto my-12 grid max-w-7xl grid-cols-1 gap-y-12 px-3 md:my-24 md:grid-cols-5 md:gap-x-6 md:px-3">
                <div className="col-span-2">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-700">
                        {about?.founder?.tagline}
                    </h3>
                    <h2 className="tw-subheading mt-2">{about?.founder?.heading}</h2>
                    <p className="mt-6 font-serif text-2xl leading-relaxed">
                        {about?.founder?.description}
                    </p>
                </div>
                <div className="col-span-3">
                    {about?.founder?.image && (
                        <Image
                            src={urlForImage(about?.founder?.image).url()}
                            alt="Bukitt Founder Mariana Riquezes"
                            layout="responsive"
                            width={1}
                            height={1}
                            objectFit="cover"
                            objectPosition="center"
                        />
                    )}
                </div>
            </section>
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
