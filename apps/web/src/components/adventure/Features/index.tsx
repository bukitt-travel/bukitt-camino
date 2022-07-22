import Image from 'next/image';
import clsx from 'clsx';
import { Tab } from '@headlessui/react';
import { PortableText } from '@portabletext/react';

import { urlForImage } from '@/lib/sanity';

const Features = ({ features, color }) => {
    return (
        <div className="mx-auto w-full max-w-7xl px-3 py-16 md:py-32 md:px-0">
            <h2
                className="tw-subheading mb-6 text-center md:mb-24 lg:mb-12"
                style={{
                    color: color,
                }}
            >
                Highlights
            </h2>
            <Tab.Group>
                <Tab.List
                    className="flex gap-x-1 bg-stone-900/20 p-1"
                    style={{ background: color }}
                >
                    {features?.map((feature) => (
                        <Tab
                            key={feature._key}
                            className={({ selected }) =>
                                clsx(
                                    'tw-transition flex w-full flex-col items-center justify-center py-2 text-sm text-stone-900',
                                    selected ? 'bg-stone-50' : 'hover:bg-stone-50/[0.12]',
                                )
                            }
                        >
                            <div className="w-8">
                                <Image
                                    src={urlForImage(feature.icon).url()}
                                    alt=""
                                    layout="responsive"
                                    width={1}
                                    height={1}
                                />
                            </div>
                            <div className="mt-2 hidden text-lg font-semibold uppercase md:block">
                                {feature.title}
                            </div>
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    {features?.map((feature) => (
                        <Tab.Panel
                            key={feature._key}
                            className={clsx(
                                'grid grid-cols-1 gap-x-12 gap-y-6 bg-stone-50 p-3 md:gap-y-0 lg:grid-cols-2',
                                'ring-stone-50 ring-opacity-60 ring-offset-2 ring-offset-stone-400 focus:outline-none focus:ring-2',
                            )}
                        >
                            <div className="col-span-1 bg-stone-200">
                                {feature.image && (
                                    <Image
                                        src={feature?.image}
                                        alt=""
                                        layout="responsive"
                                        width={1}
                                        height={1}
                                        objectFit="cover"
                                        objectPosition="center"
                                        className="bg-stone-200"
                                    />
                                )}
                            </div>

                            <div className="col-span-1">
                                <div className="mb-2 text-xl font-semibold uppercase md:hidden lg:text-2xl">
                                    {feature.title}
                                </div>
                                {feature.image && (
                                    <div className="prose prose-lg w-full font-serif lg:prose-2xl">
                                        <PortableText value={feature.description} />
                                    </div>
                                )}
                            </div>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
};

export default Features;
