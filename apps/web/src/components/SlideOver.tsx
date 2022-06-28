import { Fragment } from 'react';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import classNames from 'classnames';

import { urlForImage } from '@/lib/sanity';

const SlideOver = ({ open, setOpen, adventure }) => {
    const includedServices = adventure.services.filter(
        (service) => service.category === 'included',
    );
    // const notIncludedServices = adventure.services.filter(
    //     (service) => service.category === 'not-included',
    // );
    // const addedOnServices = adventure.services.filter(
    //     (service) => service.category === 'add-on',
    // );

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-2xl">
                                    <div
                                        className="overflow-y-scrole flex h-full flex-col py-6 shadow-xl"
                                        style={{
                                            backgroundColor: adventure.bgColor,
                                        }}
                                    >
                                        <div className="px-4 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="text-lg font-medium text-white">
                                                    {' '}
                                                    Trip Details{' '}
                                                </Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                                                        onClick={() =>
                                                            setOpen(false)
                                                        }
                                                    >
                                                        <span className="sr-only">
                                                            Close panel
                                                        </span>
                                                        <XIcon
                                                            className="h-6 w-6"
                                                            aria-hidden="true"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                            <h2 className="font-serif text-4xl font-medium">
                                                Included
                                            </h2>
                                            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                                                {includedServices.map(
                                                    (service) => (
                                                        <Disclosure
                                                            as="div"
                                                            key={service._key}
                                                            className="pt-6"
                                                        >
                                                            {({ open }) => (
                                                                <>
                                                                    <dt className="text-lg">
                                                                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                                                                            <div className="flex items-center gap-x-2">
                                                                                <div className="h-6 w-6">
                                                                                    <Image
                                                                                        src={urlForImage(
                                                                                            service.icon,
                                                                                        ).url()}
                                                                                        alt="Icon"
                                                                                        layout="responsive"
                                                                                        width={
                                                                                            1
                                                                                        }
                                                                                        height={
                                                                                            1
                                                                                        }
                                                                                    />
                                                                                </div>
                                                                                <span className="font-medium text-gray-900">
                                                                                    {
                                                                                        service.title
                                                                                    }
                                                                                </span>
                                                                            </div>
                                                                            <span className="ml-6 flex h-7 items-center">
                                                                                <ChevronDownIcon
                                                                                    className={classNames(
                                                                                        open
                                                                                            ? '-rotate-180'
                                                                                            : 'rotate-0',
                                                                                        'h-6 w-6 transform',
                                                                                    )}
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </span>
                                                                        </Disclosure.Button>
                                                                    </dt>
                                                                    <Disclosure.Panel
                                                                        as="dd"
                                                                        className="mt-2 pr-12"
                                                                    >
                                                                        <p className="text-base text-gray-500">
                                                                            {
                                                                                service.description
                                                                            }
                                                                        </p>
                                                                    </Disclosure.Panel>
                                                                </>
                                                            )}
                                                        </Disclosure>
                                                    ),
                                                )}
                                            </dl>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default SlideOver;
