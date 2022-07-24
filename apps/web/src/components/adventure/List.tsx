import Link from 'next/link';
import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

const List = ({ adventures }) => {
    return (
        <section
            className="mx-auto my-12 grid max-w-screen-2xl grid-cols-1 gap-y-12 px-3 text-stone-50 md:my-24 md:grid-cols-2 md:gap-x-6 md:px-3"
            id="adventures"
        >
            {adventures.map((adventure) => {
                const title = adventure.title.split(' ');
                return (
                    <div
                        className="h-fit py-12 text-center odd:mt-0 md:py-24 md:even:mt-48 lg:odd:text-left lg:even:text-right"
                        style={{
                            backgroundColor: adventure.color,
                        }}
                        key={adventure.id}
                    >
                        <Link href={`/adventures/${adventure.slug}`} passHref>
                            <a className="group">
                                <h3 className="px-3 text-xs uppercase tracking-widest lg:mt-2 lg:px-12 lg:text-2xl">
                                    {adventure.location}
                                </h3>

                                <h2 className="relative z-10 mt-1 flex flex-col px-3 font-serif md:mt-3 md:px-12">
                                    <span className="text-5xl font-bold uppercase lg:text-8xl">
                                        {title[0]}
                                    </span>
                                    <span className="text-6xl font-light italic lg:text-9xl">
                                        {title[1]}
                                    </span>
                                </h2>

                                <div className="z-0 -mt-6 px-12 md:-mt-16">
                                    {adventure.image && (
                                        <Image
                                            src={urlForImage(adventure.image).url()}
                                            alt="Camino de Santiago"
                                            layout="responsive"
                                            width={4}
                                            height={4}
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
        </section>
    );
};

export default List;
