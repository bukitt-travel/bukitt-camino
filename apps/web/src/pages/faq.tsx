import clsx from 'clsx';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';

import { sanityClient } from '@/lib/sanity.server';
import { faqPageQuery } from '@/lib/queries';

import Page from '@/components/shared/Page';

const FAQ = ({ faq }) => {
    return (
        <Page metaTitle="FAQ" metaDescription="We answer the most impor.">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-3xl divide-y-2 divide-stone-200">
                    <section className="mx-auto my-12 max-w-2xl text-center">
                        <h1 className="mt-6 font-serif text-8xl font-bold uppercase">FAQ</h1>
                    </section>
                    <dl className="mt-6 space-y-6 divide-y divide-stone-200">
                        {faq.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="pt-6">
                                {({ open }) => (
                                    <>
                                        <dt className="text-lg">
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-stone-400">
                                                <span className="font-semibold text-stone-900">
                                                    {faq.question}
                                                </span>
                                                <span className="ml-6 flex h-7 items-center">
                                                    <ChevronDownIcon
                                                        className={clsx(
                                                            open ? '-rotate-180' : 'rotate-0',
                                                            'h-6 w-6 transform',
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
                                            <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                <p className="text-base text-stone-500">
                                                    {faq.answer}
                                                </p>
                                            </Disclosure.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </Page>
    );
};

export default FAQ;

export async function getStaticProps() {
    const data = await sanityClient.fetch(faqPageQuery);
    return {
        props: {
            faq: data.faq,
        },
        revalidate: 10,
    };
}
