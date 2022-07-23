import Image from 'next/image';
import clsx from 'clsx';
import { Tab } from '@headlessui/react';
import { PortableText } from '@portabletext/react';

import Slider from '@/components/adventure/Highlights/Slider';

import { urlForImage } from '@/lib/sanity';

const Highlights = ({ highlights, color }) => {
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
                    {highlights?.map((highlight) => (
                        <Tab
                            key={highlight._key}
                            className={({ selected }) =>
                                clsx(
                                    'tw-transition flex w-full flex-col items-center justify-center py-2 text-sm text-stone-900',
                                    selected ? 'bg-stone-50' : 'hover:bg-stone-50/[0.12]',
                                )
                            }
                        >
                            <div className="w-8">
                                <Image
                                    src={urlForImage(highlight.icon).url()}
                                    alt=""
                                    layout="responsive"
                                    width={1}
                                    height={1}
                                />
                            </div>
                            <div className="mt-2 hidden text-lg font-semibold uppercase md:block">
                                {highlight.title}
                            </div>
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    {highlights?.map((highlight) => (
                        <Tab.Panel
                            key={highlight._key}
                            className={clsx(
                                'grid grid-cols-1 gap-x-12 gap-y-6 bg-stone-50 p-3 md:gap-y-0 lg:grid-cols-2',
                            )}
                        >
                            <div className="col-span-1 bg-stone-200">
                                {highlight.gallery && (
                                    <Slider gallery={highlight.gallery}  />
                                )}
                            </div>

                            <div className="col-span-1">
                                <div className="mb-2 text-xl font-semibold uppercase md:hidden lg:text-2xl">
                                    {highlight.title}
                                </div>
                                {highlight.description && (
                                    <div className="prose prose-lg w-full font-serif lg:prose-2xl">
                                        <PortableText value={highlight.description} />
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

export default Highlights;
