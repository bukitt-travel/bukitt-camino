import Image from 'next/image';
import { RiMapPin3Line, RiInformationLine } from 'react-icons/ri';

import { urlForImage } from '@/lib/sanity';

const Hero = ({ adventure, setOpen }) => {
    const title = adventure.title.split(' ');

    return (
        <section
            className="flex min-h-screen flex-col py-12 md:py-24"
            style={{
                backgroundColor: adventure.color,
            }}
        >
            <div className="text-center">
                <h2 className="flex items-baseline justify-center gap-x-1 text-2xl font-medium md:gap-x-2 md:text-3xl">
                    <RiMapPin3Line />
                    <span>{adventure.location}</span>
                </h2>
                <h1 className="relative z-10 mt-1.5 flex flex-col font-serif text-5xl font-bold uppercase md:mt-6 md:text-9xl">
                    {title.map((word, idx) => (
                        <span key={idx}>{word}</span>
                    ))}
                </h1>
            </div>

            <div className="z-0 mx-auto -mt-6 w-full max-w-4xl md:-mt-24">
                <Image
                    src={urlForImage(adventure.image).url()}
                    alt="Camino de Santiago"
                    layout="responsive"
                    width={1}
                    height={1}
                    objectFit="cover"
                    objectPosition="center"
                    className="rounded-full"
                />
            </div>

            <button
                className="mt-12 flex items-center justify-center text-2xl font-medium md:gap-x-2 md:text-3xl"
                onClick={() => setOpen(true)}
            >
                <RiInformationLine className="tw-transition hover:scale-105" />
                Trip Details
            </button>
        </section>
    );
};

export default Hero;
