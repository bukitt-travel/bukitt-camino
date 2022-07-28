import { PortableText } from '@portabletext/react';
import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

const Features = ({ features }) => {
    return (
        <section className="mx-auto bg-stone-900 py-12 text-stone-50 lg:py-24">
            <h2 className="tw-subheading text-center">What sets us apart</h2>
            <div className="grid grid-cols-1 divide-y divide-x-0 divide-dashed divide-stone-50 divide-opacity-50 lg:grid-cols-3 lg:gap-y-0 lg:divide-x lg:divide-y-0">
                {features.map((feature, idx) => (
                    <div key={idx} className="mt-6 px-6 py-12 lg:mt-12 lg:py-0 lg:px-12">
                        <h3 className="text-4xl font-medium">{feature.heading}</h3>
                        {feature.image && (
                            <div className="prose prose-lg mt-6 w-full lg:prose-xl">
                                {feature?.image && (
                                    <Image
                                        src={urlForImage(feature.image)
                                            .width(1440)
                                            .height(1920)
                                            .url()}
                                        alt="Bukitt Founder Mariana Riquezes"
                                        layout="responsive"
                                        width={3}
                                        height={4}
                                        objectFit="cover"
                                        objectPosition="center"
                                    />
                                )}
                            </div>
                        )}
                        {feature.description && (
                            <div className="prose prose-lg mt-6 w-full text-stone-50 lg:prose-xl">
                                <PortableText value={feature.description} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
