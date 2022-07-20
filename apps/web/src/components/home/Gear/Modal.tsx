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
                            <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="font-serif text-3xl font-medium text-stone-900"
                                >
                                    {gear[selected]?.name}
                                </Dialog.Title>

                                {gear[selected]?.image && (
                                    <div className="mx-auto max-w-sm pt-12">
                                        <Image
                                            src={urlForImage(gear[selected]?.image).url()}
                                            alt="Camino de Santiago"
                                            layout="responsive"
                                            width={4}
                                            height={3}
                                            objectFit="cover"
                                            objectPosition="center"
                                        />
                                    </div>
                                )}
                                <div className="mt-8">
                                    <p className="text-base text-stone-700">
                                        <PortableText value={gear[selected]?.description} />
                                    </p>
                                </div>

                                <RiCloseLine
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-0 right-0 mr-2 mt-2 h-6 w-6 cursor-pointer hover:opacity-75"
                                />
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default Modal;
