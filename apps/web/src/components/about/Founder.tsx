import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { urlForImage } from '@/lib/sanity';

const Founder = ({ founder }) => {
    return (
        <section className="mx-auto my-12 grid max-w-7xl grid-cols-1 gap-y-12 px-3 md:my-24 md:grid-cols-5 md:gap-x-6 md:px-3">
            <div className="col-span-2">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-700">
                    {founder?.tagline}
                </h3>
                <h2 className="tw-subheading mt-4">{founder?.heading}</h2>
                <p className="mt-6 font-serif text-2xl leading-relaxed">
                    <PortableText value={founder?.description} />
                </p>
                <div className="mt-2 lg:mt-4">
                    <p className="text-xl font-semibold text-yellow-500">Mariana Riquezes</p>
                    <p className="text-base font-medium">Bukitt Camino Founder</p>
                </div>
            </div>
            <div className="col-span-3">
                {founder?.image && (
                    <Image
                        src={urlForImage(founder?.image).url()}
                        alt="Bukitt Founder Mariana Riquezes"
                        layout="responsive"
                        width={1}
                        height={1}
                        objectFit="cover"
                        objectPosition="center"
                    />
                )}
            </div>
        </section>
    );
};

export default Founder;
