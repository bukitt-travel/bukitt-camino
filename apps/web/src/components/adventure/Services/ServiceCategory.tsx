import Image from 'next/image';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import clsx from 'clsx';

import { urlForImage } from '@/lib/sanity';

const ServiceCategory = ({ label, services }) => {
    return (
        <div className="mt-6 border-b border-dashed border-stone-900 py-6">
            <h2 className="font-serif text-3xl font-medium lg:text-4xl">{label}</h2>
            <dl className="mt-6 space-y-6 divide-y divide-dashed divide-stone-900 divide-opacity-50">
                {services &&
                    services?.map((service) => (
                        <Disclosure as="div" key={service._key} className="pt-6">
                            {({ open }) => (
                                <>
                                    <dt className="text-lg">
                                        <Disclosure.Button className="flex w-full items-start justify-between text-left">
                                            <div className="flex items-center gap-x-2">
                                                <div className="h-6 w-6 lg:h-8 lg:w-8">
                                                    <Image
                                                        src={urlForImage(service.icon).url()}
                                                        alt="Icon"
                                                        layout="responsive"
                                                        width={1}
                                                        height={1}
                                                    />
                                                </div>

                                                <div className="flex items-baseline gap-x-2">
                                                    <p className="text-sm font-semibold uppercase lg:text-base">
                                                        {service.title}
                                                    </p>
                                                </div>
                                            </div>
                                            <span className="ml-6 flex h-7 items-center">
                                                <ChevronDownIcon
                                                    className={clsx(
                                                        open ? '-rotate-180' : 'rotate-0',
                                                        'tw-transition h-6 w-6 hover:opacity-50',
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </Disclosure.Button>
                                    </dt>
                                    <Transition
                                        enter="transition duration-100 ease-out"
                                        enterFrom="transform scale-95 opacity-0"
                                        enterTo="transform scale-100 opacity-100"
                                        leave="transition duration-75 ease-out"
                                        leaveFrom="transform scale-100 opacity-100"
                                        leaveTo="transform scale-95 opacity-0"
                                    >
                                        <Disclosure.Panel as="dd" className="mt-4 pr-12">
                                            <p className="text-base">{service.description}</p>
                                            {service?.category === 'add on' && service?.price && (
                                                <p className="mt-2">
                                                    <span className="text-xs italic">from</span>
                                                    <span className="text-sm font-bold">
                                                        {' '}
                                                        ${service.price}
                                                    </span>
                                                </p>
                                            )}
                                        </Disclosure.Panel>
                                    </Transition>
                                </>
                            )}
                        </Disclosure>
                    ))}
            </dl>
        </div>
    );
};

export default ServiceCategory;
