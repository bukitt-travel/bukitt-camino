import Image from 'next/image';
import clsx from 'clsx';
import { Tab } from '@headlessui/react';
import { PortableText } from '@portabletext/react';

import { urlForImage } from '@/lib/sanity';

const Features = ({ features, color }) => {
    return (
        <div className="mx-auto w-full max-w-5xl px-2 py-16 sm:px-0">
            <h2
                className="tw-subheading mb-12 text-center md:mb-24"
                style={{
                    color: color,
                }}
            >
                Trip Highlights
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
                            <div className="w-6 md:w-12">
                                <Image
                                    src={urlForImage(feature.icon).url()}
                                    alt=""
                                    layout="responsive"
                                    width={1}
                                    height={1}
                                />
                            </div>
                            <div className="hidden text-xl font-medium uppercase md:block">
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
                                'flex flex-col gap-x-12 gap-y-6 bg-stone-50 p-3 md:flex-row md:gap-y-0',
                                'ring-stone-50 ring-opacity-60 ring-offset-2 ring-offset-stone-400 focus:outline-none focus:ring-2',
                            )}
                        >
                            <div className="w-full bg-stone-100 md:w-1/2">
                                {feature.image && (
                                    <Image
                                        src={feature?.image}
                                        alt=""
                                        layout="responsive"
                                        width={1}
                                        height={1}
                                        objectFit="cover"
                                        objectPosition="center"
                                        className="bg-stone-100"
                                    />
                                )}
                            </div>
                            {feature.image && (
                                <div className="prose col-span-1 w-full prose-p:text-xl md:w-1/2">
                                    <PortableText value={feature.description} />
                                </div>
                            )}
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
};

export default Features;
