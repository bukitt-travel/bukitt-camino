import { Fragment } from 'react';
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';
import {
    RiCloseLine,
    RiPhoneLine,
    RiMailLine,
    RiArrowRightSLine,
    RiInstagramLine,
} from 'react-icons/ri';

const MobileMenu = ({ open, setOpen, navLinks }) => {
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10 block lg:hidden" onClose={setOpen}>
                <div className="fixed inset-0" />

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-0 flex max-w-full">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="-translate-y-full"
                                enterTo="translate-y-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-y-0"
                                leaveTo="-translate-y-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                        <div className="px-4 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="text-lg font-medium text-stone-900" />
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="text-stone-900"
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
                                        </div>
                                        <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                            <ul className="flex flex-col gap-y-6">
                                                {navLinks.map((navLink) => (
                                                    <li key={navLink.id}>
                                                        <Link href={navLink.slug} passHref>
                                                            <a
                                                                className="flex font-serif text-4xl"
                                                                onClick={() => setOpen(false)}
                                                            >
                                                                <RiArrowRightSLine />
                                                                <span>{navLink.label}</span>
                                                            </a>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
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
