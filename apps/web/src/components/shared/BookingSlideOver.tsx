import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';

import { useStore } from '@/lib/store';
import InquiryForm from '../forms/InquiryForm';

const BookingSlideOver = ({ adventures }) => {
    // @ts-expect-error need to find types for useStore()
    const { bookingIsOpen, toggleBooking } = useStore();
    const [agreed, setAgreed] = useState(false);

    return (
        <Transition.Root show={bookingIsOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => toggleBooking(false)}>
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
                            <div className="flex h-full flex-col overflow-y-scroll bg-stone-100 shadow-xl">
                                <div className="bg-stone-900 text-stone-50">
                                    <div className="flex items-center justify-between px-3">
                                        <Dialog.Title className="flex h-16 items-center font-serif text-lg font-bold uppercase lg:h-24 lg:text-xl">
                                            Contact Us
                                        </Dialog.Title>

                                        <div className="flex items-center">
                                            <button
                                                type="button"
                                                className="tw-transition hover:opacity-50"
                                                onClick={() => toggleBooking(false)}
                                            >
                                                <span className="sr-only">Close panel</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <section className="px-6 py-12 lg:p-12">
                                    <InquiryForm adventures={adventures} />
                                </section>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default BookingSlideOver;
