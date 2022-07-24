import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { RiCloseLine, RiPhoneLine, RiMailLine, RiInstagramLine } from 'react-icons/ri';

import NavLinks from '@/components/navigation/MobileMenu/NavLinks';

const MobileMenu = ({ open, setOpen, navLinks }) => {
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-10 block text-stone-50 lg:hidden"
                onClose={setOpen}
            >
                <div className="fixed inset-0" />

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-0 flex max-w-full">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-stone-900 py-6 shadow-xl">
                                        <div className="px-4 sm:px-3">
                                            <div className="flex items-start justify-start">
                                                <Dialog.Title className="text-lg font-medium" />
                                                <button
                                                    type="button"
                                                    className="ring-0"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <span className="sr-only">Close panel</span>
                                                    <RiCloseLine
                                                        className="h-6 w-6"
                                                        aria-hidden="true"
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                        <NavLinks navLinks={navLinks} setOpen={setOpen} />
                                        <footer className="inset-x-0 bottom-0 flex justify-evenly">
                                            <div>
                                                <RiPhoneLine className="h-8 w-8" />
                                            </div>
                                            <div>
                                                <RiMailLine className="h-8 w-8" />
                                            </div>
                                            <div>
                                                <RiInstagramLine className="h-8 w-8" />
                                            </div>
                                        </footer>
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

export default MobileMenu;
