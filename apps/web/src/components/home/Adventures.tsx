import Link from 'next/link';
import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

const Adventures = ({ adventures }) => {
    return (
        <section className="mx-auto max-w-7xl py-12 px-3 lg:px-6 lg:py-24">
            <h2 className="tw-subheading text-center">Our Caminos</h2>

            <div
                className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-y-12 text-stone-900 md:grid-cols-2 md:gap-x-6"
                id="adventures"
            >
                {adventures.map((adventure) => {
                    const title = adventure.title.split(' ');
                    return (
                        <div
                            key={adventure.id}
                            className="h-fit py-6 px-3 text-center odd:mt-0 lg:p-12 lg:odd:text-left lg:even:mt-24 lg:even:text-right"
                            style={{
                                backgroundColor: adventure.color,
                            }}
                        >
                            <Link href={`/adventures/${adventure.slug}`} passHref>
                                <a className="group">
                                    <h3 className="text-xs uppercase tracking-widest lg:text-xl">
                                        {adventure.location}
                                    </h3>

                                    <h2 className="relative z-10 mt-1 flex flex-col font-serif md:mt-2">
                                        <span className="text-5xl font-bold uppercase lg:text-7xl">
                                            {title[0]}
                                        </span>
                                        <span className="text-6xl font-light italic lg:text-8xl">
                                            {title[1]}
                                        </span>
                                    </h2>

                                    <div className="z-0 -mt-6 px-12 md:-mt-16">
                                        {adventure.image && (
                                            <Image
                                                src={urlForImage(adventure.image)
                                                    .width(1080)
                                                    .height(1080)
                                                    .url()}
                                                alt="Camino de Santiago"
                                                layout="responsive"
                                                width={1}
                                                height={1}
                                                objectFit="cover"
                                                objectPosition="center"
                                                className="tw-transition md:grayscale md:group-hover:grayscale-0"
                                            />
                                        )}
                                    </div>
                                    <div className="mt-6 text-center md:mt-12">
                                        <div>
                                            <h4 className="text-sm font-bold uppercase md:text-base">
                                                {adventure.availability}
                                            </h4>
                                        </div>
                                        <div className="mt-1 md:mt-2">
                                            <p>
                                                <span className="text-base font-light italic md:text-lg">
                                                    from
                                                </span>{' '}
                                                <span className="text-lg font-medium md:text-2xl">
                                                    ${adventure.price}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Adventures;
