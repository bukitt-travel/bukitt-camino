import Link from 'next/link';
import Image from 'next/image';

import { sanityClient } from '@/lib/sanity.server';
import { homePageQuery } from '@/lib/queries';
import { urlForImage } from '@/lib/sanity';

import Page from '@/components/Page';
import Navigation from '@/components/Navigation';

const HomePage = ({ adventures }) => {
    return (
        <Page>
            <Navigation />
            <section className="mx-auto grid max-w-screen-2xl grid-cols-2 gap-x-6">
                {adventures.map((adventure) => {
                    const title = adventure.title.split(' ');
                    return (
                        <div
                            key={adventure.id}
                            className={`h-fit py-24 text-${adventure.txtColor} even:mt-48 even:text-right`}
                            style={{
                                backgroundColor: adventure.bgColor,
                                color: adventure.txtColor,
                            }}
                        >
                            <h3 className="relative z-10 flex flex-col px-12 font-serif text-2xl font-light italic">
                                Camino Francés
                            </h3>
                            <h2 className="relative z-10 mt-3 flex flex-col px-12 font-serif text-8xl font-bold uppercase">
                                {title.map((word, idx) => (
                                    <span key={idx}>{word}</span>
                                ))}
                            </h2>
                            <Link href={`/adventures/${adventure.slug}`}>
                                <a>
                                    <div className="z-0 -mt-12 px-24">
                                        {adventure.image && (
                                            <Image
                                                src={urlForImage(
                                                    adventure.image,
                                                ).url()}
                                                alt="Camino de Santiago"
                                                layout="responsive"
                                                width={4}
                                                height={3}
                                                objectFit="cover"
                                                objectPosition="center"
                                                className="tw-transition grayscale hover:grayscale-0"
                                            />
                                        )}
                                    </div>
                                </a>
                            </Link>
                            <div className="mt-12 text-center">
                                <div>
                                    <h4 className="font-bold uppercase">
                                        Curated Gear
                                    </h4>
                                </div>
                                <div className="mt-2">
                                    <p className="text-2xl">
                                        <span className="font-serif font-light">
                                            starting from
                                        </span>{' '}
                                        <span className="font-medium">
                                            ${adventure.startingPrice}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </section>

            <section className="flex min-h-screen flex-col items-center justify-center bg-stone-200">
                <h4>Curated Gear</h4>
                <p className="font-serif text-6xl">
                    We take care of your ride and the gear
                </p>
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
    };
}
