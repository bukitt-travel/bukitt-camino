import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

const Hero = ({ adventure }) => {
    const title = adventure.title.split(' ');

    return (
        <section
            className="lg:tw-hero-full-desktop tw-hero-full-mobile flex flex-col py-12 px-3 text-stone-900 lg:px-24 lg:py-24"
            style={{
                backgroundColor: adventure.color,
            }}
        >
            <div className="text-center">
                <h2 className="px-3 text-xs uppercase tracking-widest lg:mt-2 lg:px-12 lg:text-2xl">
                    <span>{adventure.location}</span>
                </h2>
                <h1 className="relative z-10 mt-1.5 flex flex-col font-serif lg:mt-3 lg:text-9xl">
                    <span className="text-5xl font-bold uppercase lg:text-8xl">{title[0]}</span>
                    <span className="font-serif text-6xl font-light italic lg:text-9xl">
                        {title[1]}
                    </span>
                </h1>
            </div>

            <div className="z-0 mx-auto -mt-6 w-full max-w-2xl md:-mt-16">
                {adventure.image && (
                    <Image
                        src={urlForImage(adventure.image).url()}
                        alt="Camino de Santiago"
                        layout="responsive"
                        width={4}
                        height={3}
                        objectFit="cover"
                        objectPosition="center"
                        priority
                    />
                )}
            </div>
        </section>
    );
};

export default Hero;
