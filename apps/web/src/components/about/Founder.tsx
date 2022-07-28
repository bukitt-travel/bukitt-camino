import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { urlForImage } from '@/lib/sanity';

const Founder = ({ founder }) => {
    return (
        <section className="mx-auto my-12 grid max-w-7xl grid-cols-1 gap-y-12 px-3 py-12 md:my-24 md:grid-cols-5 md:gap-x-6 md:px-3 lg:py-24">
            <div className="col-span-3">
                {founder?.image && (
                    <Image
                        src={urlForImage(founder.image).width(1440).height(1920).url()}
                        alt="Bukitt Founder Mariana Riquezes"
                        layout="responsive"
                        width={3}
                        height={4}
                        objectFit="cover"
                        objectPosition="center"
                    />
                )}
            </div>
            <div className="col-span-2">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-stone-700">
                    {founder?.tagline}
                </h3>
                <h2 className="tw-subheading">{founder?.heading}</h2>
                <div className="mt-6 font-serif text-2xl leading-relaxed">
                    <PortableText value={founder?.description} />
                </div>
                <div className="mt-4 lg:mt-6">
                    <p className="text-xl font-semibold text-stone-700">Mariana Riquezes</p>
                    <p className="text-base font-medium text-stone-500">Bukitt Camino Founder</p>
                </div>
            </div>
        </section>
    );
};

export default Founder;
