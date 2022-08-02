import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { urlForImage } from '@/lib/sanity';

const Founder = ({ founder }) => {
    return (
        <section className="mx-auto grid max-w-7xl grid-cols-1 gap-y-12 px-3 py-16 md:grid-cols-5 md:px-3 lg:gap-x-16 lg:py-32">
            <div className="col-span-2">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-700">
                    {founder?.tagline}
                </h3>
                <h2 className="tw-subheading mt-2 lg:mt-4">{founder?.heading}</h2>
                <div className="font-serif text-2xl leading-relaxed">
                    <PortableText value={founder?.description} />
                </div>
                <div className="mt-4 lg:mt-6">
                    <p className="text-xl font-semibold text-stone-700">Mariana Riquezes</p>
                    <p className="text-base font-medium text-stone-500">Bukitt Camino Founder</p>
                </div>
            </div>
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
        </section>
    );
};

export default Founder;
