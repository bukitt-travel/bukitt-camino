import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';

import ServiceCategory from '@/components/adventure/Services/ServiceCategory';

const ServicesSlideOver = ({
    title,
    includedServices,
    notIncludedServices,
    addOnServices,
    open,
    setOpen,
}) => {
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
                    <div className="fixed inset-0 bg-stone-900 bg-opacity-50 transition-opacity" />
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
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-xl">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-stone-100 shadow-xl ">
                                        <div className="bg-stone-900 text-stone-50">
                                            <div className="flex items-center justify-between px-3 ">
                                                <Dialog.Title className="flex h-16 items-center font-serif text-lg font-medium">
                                                    {' '}
                                                    {title} Details{' '}
                                                </Dialog.Title>

                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="tw-transition hover:opacity-50"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        <span className="sr-only">Close panel</span>
                                                        <XIcon
                                                            className="h-6 w-6"
                                                            aria-hidden="true"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="px-3">
                                            {includedServices?.length ? (
                                                <ServiceCategory
                                                    label="Included"
                                                    services={includedServices}
                                                />
                                            ) : (
                                                <></>
                                            )}

                                            {addOnServices?.length ? (
                                                <ServiceCategory
                                                    label="Add-Ons"
                                                    services={addOnServices}
                                                />
                                            ) : (
                                                <></>
                                            )}

                                            {notIncludedServices?.length ? (
                                                <ServiceCategory
                                                    label="Not Included"
                                                    services={notIncludedServices}
                                                />
                                            ) : (
                                                <></>
                                            )}
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

export default ServicesSlideOver;
