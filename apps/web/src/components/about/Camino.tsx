import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { urlForImage } from '@/lib/sanity';

const Camino = ({ camino }) => {
    return (
        <section className="mx-auto my-12 grid max-w-7xl grid-cols-1 gap-y-12 px-3 py-12 md:my-24 md:grid-cols-5 md:gap-x-6 md:px-3 lg:py-12">
            <div className="col-span-2">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-stone-700">
                    {camino?.tagline}
                </h3>
                <h2 className="tw-subheading">{camino?.heading}</h2>
                <div className="mt-6 font-serif text-2xl leading-relaxed">
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
