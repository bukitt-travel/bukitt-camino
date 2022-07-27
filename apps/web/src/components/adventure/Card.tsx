import Link from 'next/link';
import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

const Card = ({ adventure, title, className }) => {
    return (
        <Link href={`/adventures/${adventure.slug}`} passHref className={className}>
            <a>
                <div
                    className="group h-fit py-32"
                    style={{
                        backgroundColor: adventure.color,
                    }}
                >
                    <h3 className="px-12 text-2xl font-light italic">{adventure.location}</h3>

                    <h2 className="relative z-10 mt-3 flex flex-col px-12 font-serif text-8xl font-bold uppercase">
                        {title.map((word, idx) => (
                            <span key={idx}>{word}</span>
                        ))}
                    </h2>
                    <div className="z-0 -mt-12 px-24">
                        {adventure.image && (
                            <Image
                                src={urlForImage(adventure.image).width(1920).height(1440).url()}
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

                    <div className="mt-12 text-center">
                        <div>
                            <h4 className="font-bold uppercase">{adventure.availability}</h4>
                        </div>
                        <div className="mt-2">
                            <p className="text-2xl">
                                <span className="font-serif font-light">starting from</span>{' '}
                                <span className="font-medium">${adventure.price}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default Card;
