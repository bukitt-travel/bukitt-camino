import Link from 'next/link';
import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

const List = ({ adventures }) => {
    return (
        <section className="mx-auto my-12 grid max-w-screen-2xl grid-cols-1 gap-y-12 px-3 md:my-24 md:grid-cols-2 md:gap-x-6 md:px-6">
            {adventures.map((adventure) => {
                const title = adventure.title.split(' ');
                return (
                    <div
                        className="h-fit py-12 odd:mt-0 odd:text-left even:text-right md:py-24 md:even:mt-48"
                        style={{
                            backgroundColor: adventure.color,
                        }}
                        key={adventure.id}
                    >
                        <Link href={`/adventures/${adventure.slug}`} passHref>
                            <a className="group">
                                <h3 className="px-6 font-serif text-lg font-light italic md:px-12 md:text-2xl">
                                    {adventure.location}
                                </h3>

                                <h2 className="relative z-10 mt-1 flex flex-col px-6 font-serif text-5xl font-bold uppercase md:mt-3 md:px-12 md:text-8xl">
                                    {title.map((word, idx) => (
                                        <span key={idx}>{word}</span>
                                    ))}
                                </h2>

                                <div className="z-0 -mt-6 px-6 md:-mt-12 md:px-24">
                                    {adventure.image && (
                                        <Image
                                            src={urlForImage(adventure.image).url()}
                                            alt="Camino de Santiago"
                                            layout="responsive"
                                            width={4}
                                            height={3}
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
                                    <div className="mt-2 md:mt-4">
                                        <p>
                                            <span className="font-serif text-base font-light md:text-xl">
                                                starting from
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
