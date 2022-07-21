import Link from 'next/link';
import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

const List = ({ adventures }) => {
    return (
        <section
            className="mx-auto my-12 grid max-w-screen-2xl grid-cols-1 gap-y-12 px-3 md:my-24 md:grid-cols-2 md:gap-x-6 md:px-3"
            id="adventures"
        >
            {adventures.map((adventure) => {
                const title = adventure.title.split(' ');
                return (
                    <div
                        className="h-fit py-24 odd:mt-0 odd:text-left even:text-right md:py-32 md:even:mt-48"
                        style={{
                            backgroundColor: adventure.color,
                        }}
                        key={adventure.id}
                    >
                        <Link href={`/adventures/${adventure.slug}`} passHref>
                            <a className="group">
                                <h3 className="px-3 font-serif text-xl font-light md:px-12 md:text-2xl">
                                    {adventure.location}
                                </h3>

                                <h2 className="relative z-10 mt-1 flex flex-col px-3 font-serif text-5xl font-bold uppercase md:mt-3 md:px-12 md:text-8xl">
                                    {title.map((word, idx) => (
                                        <span key={idx}>{word}</span>
                                    ))}
                                </h2>

                                <div className="z-0 -mt-6 px-3 md:-mt-12">
                                    {adventure.image && (
                                        <Image
                                            src={urlForImage(adventure.image).url()}
                                            alt="Camino de Santiago"
                                            layout="responsive"
                                            width={4}
                                            height={4}
                                            objectFit="cover"
                                            objectPosition="center"
                                            className="tw-transition rounded-full md:grayscale md:group-hover:grayscale-0"
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
                                            <span className="font-serif text-base font-light italic md:text-lg">
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
