import Image from 'next/image';
import { InformationCircleIcon } from '@heroicons/react/outline';
import { RiMapPin3Line } from 'react-icons/ri';

import { urlForImage } from '@/lib/sanity';

const Hero = ({ adventure, setOpen }) => {
    const title = adventure.title.split(' ');

    return (
        <section
            className="flex min-h-screen flex-col py-24"
            style={{
                backgroundColor: adventure.color,
            }}
        >
            <div className="text-center">
                <h2 className="relative z-10 flex items-baseline justify-center gap-x-1 font-serif text-lg md:gap-x-2 md:text-2xl">
                    <RiMapPin3Line />
                    <span>{adventure.location}</span>
                </h2>
                <h1 className="relative z-10 mt-3 flex flex-col font-serif text-6xl font-bold uppercase md:mt-6 md:text-9xl">
                    {title.map((word, idx) => (
                        <span key={idx}>{word}</span>
                    ))}
                </h1>
            </div>

            <div className="z-0 mx-auto -mt-6 w-3/5 md:-mt-12">
                <Image
                    src={urlForImage(adventure.image).url()}
                    alt="Camino de Santiago"
                    layout="responsive"
                    width={4}
                    height={3}
                    objectFit="cover"
                    objectPosition="center"
                />
            </div>
            <div className="mt-6 flex items-center justify-center md:mt-12">
                <button
                    onClick={() => setOpen(true)}
                    className="flex items-center justify-center gap-x-2 text-2xl"
                >
                    <InformationCircleIcon className="w-4 md:w-6" />
                    <span className="font-serif text-lg md:text-2xl">Trip Details</span>
                </button>
            </div>
        </section>
    );
};

export default Hero;
