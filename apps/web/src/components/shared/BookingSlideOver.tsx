import { Fragment, useState } from 'react';
import { Dialog, Transition, Switch } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import classNames from 'classnames';

const BookingSlideOver = ({ open, setOpen }) => {
    const [agreed, setAgreed] = useState(false);

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
                            <div className="flex h-full flex-col overflow-y-scroll bg-stone-100 py-6 shadow-xl">
                                <div className="border-b-2 border-stone-900 px-4 pb-6 sm:px-6">
                                    <div className="flex items-start justify-between">
                                        <Dialog.Title className="font-serif text-lg font-medium">
                                            {' '}
                                            xxx{' '}
                                        </Dialog.Title>

                                        <div className="ml-3 flex h-7 items-center">
                                            <button
                                                type="button"
                                                className="tw-transition hover:opacity-50"
                                                onClick={() => setOpen(false)}
                                            >
                                                <span className="sr-only">Close panel</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative mx-auto max-w-xl py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
                                    <svg
                                        className="absolute left-full translate-x-1/2 transform"
                                        width={404}
                                        height={404}
                                        fill="none"
                                        viewBox="0 0 404 404"
                                        aria-hidden="true"
                                    >
                                        <defs>
                                            <pattern
                                                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                                                x={0}
                                                y={0}
                                                width={20}
                                                height={20}
                                                patternUnits="userSpaceOnUse"
                                            >
                                                <rect
                                                    x={0}
                                                    y={0}
                                                    width={4}
                                                    height={4}
                                                    className="text-stone-200"
                                                    fill="currentColor"
                                                />
                                            </pattern>
                                        </defs>
                                        <rect
                                            width={404}
                                            height={404}
                                            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
                                        />
                                    </svg>
                                    <svg
                                        className="absolute right-full bottom-0 -translate-x-1/2 transform"
                                        width={404}
                                        height={404}
                                        fill="none"
                                        viewBox="0 0 404 404"
                                        aria-hidden="true"
                                    >
                                        <defs>
                                            <pattern
                                                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                                                x={0}
                                                y={0}
                                                width={20}
                                                height={20}
                                                patternUnits="userSpaceOnUse"
                                            >
                                                <rect
                                                    x={0}
                                                    y={0}
                                                    width={4}
                                                    height={4}
                                                    className="text-stone-200"
                                                    fill="currentColor"
                                                />
                                            </pattern>
                                        </defs>
                                        <rect
                                            width={404}
                                            height={404}
                                            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
                                        />
                                    </svg>
                                    <div className="text-center">
                                        <h2 className="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
                                            Contact sales
                                        </h2>
                                        <p className="mt-4 text-lg leading-6 text-stone-500">
                                            Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                                            volutpat massa dictumst amet. Sapien tortor lacus arcu.
                                        </p>
                                    </div>
                                    <div className="mt-12">
                                        <form
                                            action="#"
                                            method="POST"
                                            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                                        >
                                            <div>
                                                <label
                                                    htmlFor="first-name"
                                                    className="block text-sm font-medium text-stone-700"
                                                >
                                                    First name
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        type="text"
                                                        name="first-name"
                                                        id="first-name"
                                                        autoComplete="given-name"
                                                        className="block w-full rounded-md border-stone-300 py-3 px-4 shadow-sm focus:border-stone-500 focus:ring-stone-500"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="last-name"
                                                    className="block text-sm font-medium text-stone-700"
                                                >
                                                    Last name
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        type="text"
                                                        name="last-name"
                                                        id="last-name"
                                                        autoComplete="family-name"
                                                        className="block w-full rounded-md border-stone-300 py-3 px-4 shadow-sm focus:border-stone-500 focus:ring-stone-500"
                                                    />
                                                </div>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label
                                                    htmlFor="company"
                                                    className="block text-sm font-medium text-stone-700"
                                                >
                                                    Company
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        type="text"
                                                        name="company"
                                                        id="company"
                                                        autoComplete="organization"
                                                        className="block w-full rounded-md border-stone-300 py-3 px-4 shadow-sm focus:border-stone-500 focus:ring-stone-500"
                                                    />
                                                </div>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label
                                                    htmlFor="email"
                                                    className="block text-sm font-medium text-stone-700"
                                                >
                                                    Email
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        autoComplete="email"
                                                        className="block w-full rounded-md border-stone-300 py-3 px-4 shadow-sm focus:border-stone-500 focus:ring-stone-500"
                                                    />
                                                </div>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label
                                                    htmlFor="phone-number"
                                                    className="block text-sm font-medium text-stone-700"
                                                >
                                                    Phone Number
                                                </label>
                                                <div className="relative mt-1 rounded-md shadow-sm">
                                                    <div className="absolute inset-y-0 left-0 flex items-center">
                                                        <label
                                                            htmlFor="country"
                                                            className="sr-only"
                                                        >
                                                            Country
                                                        </label>
                                                        <select
                                                            id="country"
                                                            name="country"
                                                            className="h-full rounded-md border-transparent bg-transparent py-0 pl-4 pr-8 text-stone-500 focus:border-stone-500 focus:ring-stone-500"
                                                        >
                                                            <option>US</option>
                                                            <option>CA</option>
                                                            <option>EU</option>
                                                        </select>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        name="phone-number"
                                                        id="phone-number"
                                                        autoComplete="tel"
                                                        className="block w-full rounded-md border-stone-300 py-3 px-4 pl-20 focus:border-stone-500 focus:ring-stone-500"
                                                        placeholder="+1 (555) 987-6543"
                                                    />
                                                </div>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label
                                                    htmlFor="message"
                                                    className="block text-sm font-medium text-stone-700"
                                                >
                                                    Message
                                                </label>
                                                <div className="mt-1">
                                                    <textarea
                                                        id="message"
                                                        name="message"
                                                        rows={4}
                                                        className="block w-full rounded-md border border-stone-300 py-3 px-4 shadow-sm focus:border-stone-500 focus:ring-stone-500"
                                                        defaultValue={''}
                                                    />
                                                </div>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <div className="flex items-start">
                                                    <div className="flex-shrink-0">
                                                        <Switch
                                                            checked={agreed}
                                                            onChange={setAgreed}
                                                            className={classNames(
                                                                agreed
                                                                    ? 'bg-stone-600'
                                                                    : 'bg-stone-200',
                                                                'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2',
                                                            )}
                                                        >
                                                            <span className="sr-only">
                                                                Agree to policies
                                                            </span>
                                                            <span
                                                                aria-hidden="true"
                                                                className={classNames(
                                                                    agreed
                                                                        ? 'translate-x-5'
                                                                        : 'translate-x-0',
                                                                    'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                                                                )}
                                                            />
                                                        </Switch>
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-base text-stone-500">
                                                            By selecting this, you agree to the{' '}
                                                            <a
                                                                href="#"
                                                                className="font-medium text-stone-700 underline"
                                                            >
                                                                Privacy Policy
                                                            </a>{' '}
                                                            and{' '}
                                                            <a
                                                                href="#"
                                                                className="font-medium text-stone-700 underline"
                                                            >
                                                                Cookie Policy
                                                            </a>
                                                            .
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <button
                                                    type="submit"
                                                    className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-stone-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2"
                                                >
                                                    Let&apos;s talk
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default BookingSlideOver;
