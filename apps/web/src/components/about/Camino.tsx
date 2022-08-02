import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { urlForImage } from '@/lib/sanity';

const Camino = ({ camino }) => {
    return (
        <section className="mx-auto grid max-w-7xl grid-cols-1 gap-y-12 px-3 py-16 md:px-3 lg:grid-cols-5 lg:gap-x-16 lg:py-32">
            <div className="col-span-2">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-stone-700 lg:mb-4">
                    {camino?.tagline}
                </h3>
                <h2 className="tw-subheading">{camino?.heading}</h2>
                <div className="font-serif text-2xl leading-relaxed">
                    <PortableText value={camino?.description} />
                </div>
            </div>
            <div className="col-span-3">
                {camino?.image && (
                    <Image
                        src={urlForImage(camino.image).width(1440).height(1920).url()}
                        alt="Bukitt Founder Mariana Riquezes"
                        layout="responsive"
                        width={3}
                        height={4}
                        objectFit="cover"
                        objectPosition="center"
                    />
                )}
            </div>
        </section>
    );
};

export default Camino;
