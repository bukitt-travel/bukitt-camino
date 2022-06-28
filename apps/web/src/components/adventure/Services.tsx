import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import classNames from 'classnames';

import { urlForImage } from '@/lib/sanity';

const Services = ({ label, services }) => {
    return (
        <div className="mt-6 border-b border-black border-opacity-25 p-4 sm:p-6">
            <h2 className="font-serif text-4xl font-medium">{label}</h2>
            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                {services &&
                    services?.map((service) => (
                        <Disclosure as="div" key={service._key} className="pt-6">
                            {({ open }) => (
                                <>
                                    <dt className="text-lg">
                                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-700">
                                            <div className="flex items-center gap-x-2">
                                                <div className="h-6 w-6">
                                                    <Image
                                                        src={urlForImage(service.icon).url()}
                                                        alt="Icon"
                                                        layout="responsive"
                                                        width={1}
                                                        height={1}
                                                    />
                                                </div>
                                                <span className="text-xl font-medium text-gray-900">
                                                    {service.title}
                                                </span>
                                            </div>
                                            <span className="ml-6 flex h-7 items-center">
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open ? '-rotate-180' : 'rotate-0',
                                                        'h-6 w-6 transform',
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </Disclosure.Button>
                                    </dt>
                                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                        <p className="text-base text-gray-700">
                                            {service.description}
                                        </p>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    ))}
            </dl>
        </div>
    );
};

export default Services;
