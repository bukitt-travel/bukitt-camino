import Image from 'next/image';
import { RiMapPin3Line } from 'react-icons/ri';

import CaminoIcon from '@/components/icons/CaminoIcon';

import { urlForImage } from '@/lib/sanity';

const Hero = ({ adventure, setOpen }) => {
    const title = adventure.title.split(' ');

    return (
        <section
            className="flex min-h-screen flex-col py-24 md:py-32"
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

            <div className="mt-12 flex justify-center">
                <a href="#intro">
                    <CaminoIcon className="tw-transition mt-6 w-24 rotate-180 cursor-pointer fill-stone-900 hover:scale-105 hover:fill-stone-50" />
                </a>
            </div>
        </section>
    );
};

export default Hero;
