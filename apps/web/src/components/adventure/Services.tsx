import Image from 'next/image';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import classNames from 'classnames';

import { urlForImage } from '@/lib/sanity';

const Services = ({ label, services, color }) => {
    return (
        <div className="mt-6 border-b border-dashed border-black py-6">
            <h2 className="font-serif text-3xl font-bold uppercase">{label}</h2>
            <dl className="mt-6 space-y-6 divide-y divide-dashed divide-black divide-opacity-50">
                {services &&
                    services?.map((service) => (
                        <Disclosure as="div" key={service._key} className="pt-6">
                            {({ open }) => (
                                <>
                                    <dt className="text-lg">
                                        <Disclosure.Button className="flex w-full items-start justify-between text-left">
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
                                                <span className="text-lg font-semibold">
                                                    {service.title}
                                                </span>
                                            </div>
                                            <span className="ml-6 flex h-7 items-center">
                                                <ChevronDownIcon
                                                    className={classNames(
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

export default Services;
