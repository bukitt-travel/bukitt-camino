import { Fragment } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { RiCloseLine } from 'react-icons/ri';
import { PortableText } from '@portabletext/react';

import { urlForImage } from '@/lib/sanity';

const Modal = ({ gear, isOpen, setIsOpen, selected }) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed inset-0 bg-stone-900 bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden bg-stone-50 text-left align-middle shadow-xl transition-all">
                                <div className="flex items-center justify-between bg-stone-900 px-3 text-stone-50">
                                    <Dialog.Title
                                        as="h3"
                                        className="p-3 font-serif text-xl font-medium lg:p-6 lg:text-3xl"
                                    >
                                        {gear[selected]?.name}
                                    </Dialog.Title>

                                    <div className="flex items-center">
                                        <button
                                            type="button"
                                            className="tw-transition hover:opacity-50"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <span className="sr-only">Close panel</span>
                                            <RiCloseLine className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="mx-auto max-w-sm">
                                        {gear[selected]?.image && (
                                            <Image
                                                src={urlForImage(gear[selected]?.image)
                                                    .width(1080)
                                                    .height(1080)
                                                    .url()}
                                                alt="Camino de Santiago"
                                                layout="responsive"
                                                width={1}
                                                height={1}
                                                objectFit="cover"
                                                objectPosition="center"
                                            />
                                        )}
                                    </div>
                                    <div>
                                        <div className="mt-3 flex flex-col border-y border-dashed border-stone-900 border-opacity-50 py-1.5 text-stone-900 lg:mt-6 lg:py-3">
                                            <span className="inline-block text-3xl font-bold uppercase">
                                                {gear[selected]?.model}
                                            </span>
                                            <span className="inline-block text-base font-medium text-stone-700 lg:text-lg">
                                                <span className="text-xs lg:text-sm">by</span>{' '}
                                                {gear[selected]?.brand}
                                            </span>
                                        </div>

                                        <div className="prose mt-1.5 lg:mt-3">
                                            <PortableText value={gear[selected]?.description} />
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default Modal;
